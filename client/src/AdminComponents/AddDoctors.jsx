import React, {useState} from 'react'
import '../AdminComponentsStyles/addDoctor.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const AddDoctors = () => {
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
    const [formData, setFormDate] = useState({
        name:'',
        speciality:'',
        qualifications:'',
        experience:'',  
        availability:'',
        consultation_fee:''
    })

    const handleChange = (e) => {
        setFormDate({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        formData.availability = selectedOption
        console.log(formData)

    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <label className='form__label'>
                Doctor's name: 
                <input className='form__input' type='text' onChange={handleChange} name='name' value={formData.name}/>
            </label>
            <label className='form__label'>
                Speciality: 
                <input className='form__input' type='text' onChange={handleChange} name='speciality' value={formData.speciality}/>
            </label>
            <label className='form__label'>
                Qualifications: 
                <input className='form__input' type='text' onChange={handleChange} name='qualifications' value={formData.qualifications}/>
            </label>
            <label className='form__label'>
                Experience: 
                <input className='form__input' type='text' onChange={handleChange} name='experience' value={formData.experience}/>
            </label>
            <label className='form__label'>
                Availability: 
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
                Consultation Fee: 
                <input className='form__input' type='text' onChange={handleChange} name='consultation_fee' value={formData.consultation_fee}/>
            </label>
            <button className="form__submit" type="submit">Submit</button>
        </form>
    
    </div>
  )
}

export default AddDoctors




