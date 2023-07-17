import React, {useEffect, useState} from 'react'
import '../AdminComponentsStyles/addDoctor.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import env from '../env.json'
import axios from 'axios'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../commonComponents/Loader';
const EditDoctors = () => {
    const [loading,setLoading] = useState(false)
    const animatedComponents = makeAnimated();
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'Monday',label: 'Monday'},
        { value: 'Tuesday',label: 'Tuesday'},
        { value: 'Wednesday',label: 'Wednesday'},
        { value: 'Thursday',label: 'Thursday'},
        { value: 'Friday',label: 'Friday'},
        { value: 'Saturday',label: 'Saturday'},
        { value: 'Sunday', label: 'Sunday'},
    ]
    const [formData, setFormData] = useState({
        doctorName:'',
        speciality:'',
        qualification:'',
        experience:'',  
        avaliableDays:'',
        startTime:'',
        endTime:'',
        consultationFee:'',
        email :'',
        password:''
    })
    const {id} = useParams()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        formData.avaliableDays = selectedOption
        try {
            setLoading(true)
            const {data} = await axios.post(`${env.backend_url_admin}/addDoctor`,formData)
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Doctor Added Successfull',
              })
            setLoading(false)

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'info',
                title: 'Login Failed',
                text: error.response.data.message,
              })
            setLoading(false)

        }
        window.location.reload()
    }
    const getDocById = async() => {
        const doc = await axios.get(`${env.backend_url_admin}/edit-doctor/${id}`)
        setFormData(doc.data)
        doc.data.avaliableDays.forEach((element) => {
            setSelectedOption(element.value)
        })
        console.log(selectedOption);
        console.log(doc.data.avaliableDays);
    }

    useEffect(() => {
        getDocById()
    },[])
  return (
    <>
    {loading ? (<Loader/>) : (<div>
        <form className='form' onSubmit={handleSubmit}>
            <label className='form__label'>
                Doctor's name: 
                <input className='form__input' type='text' onChange={handleChange} name='doctorName' value={formData.doctorName}/>
            </label>
            <label className='form__label'>
                Speciality: 
                <input className='form__input' type='text' onChange={handleChange} name='speciality' value={formData.speciality}/>
            </label>
            <label className='form__label'>
                Qualifications: 
                <input className='form__input' type='text' onChange={handleChange} name='qualification' value={formData.qualification}/>
            </label>
            <label className='form__label'>
                Experience: 
                <input className='form__input' type='text' onChange={handleChange} name='experience' value={formData.experience}/>
            </label>
            <label className='form__label'>
                Availabile Days
                <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={setSelectedOption}
            defaultValue={selectedOption}
            isMulti
             options={options}
          />
            </label>
            <label className='form__label'>
                Start Time: 
                <input className='form__input' type='time' onChange={handleChange} name='startTime' value={formData.startTime}/>
            </label>
            <label className='form__label'>
                End Time: 
                <input className='form__input' type='time' onChange={handleChange} name='endTime' value={formData.endTime}/>
            </label>

            <label className='form__label'>
                Consultation Fee: 
                <input className='form__input' type='text' onChange={handleChange} name='consultationFee' value={formData.consultationFee}/>
            </label>
            <label className='form__label'>
                Email: 
                <input className='form__input' type='text' onChange={handleChange} name='email' value={formData.email}/>
            </label>
            <label className='form__label'>
                Password
                <input className='form__input' type='text' onChange={handleChange} name='password' value={formData.password}/>
            </label>
            <button className="form__submit" type="submit">Submit</button>
        </form>
    
    </div>)}
    </>
    
  )
}

export default EditDoctors




