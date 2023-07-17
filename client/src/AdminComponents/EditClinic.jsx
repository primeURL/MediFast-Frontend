import React, {useEffect, useState} from 'react'
import { FormControl, TextField, styled, Button } from '@mui/material';
import env from '../env.json'
import axios from 'axios'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import '../AdminComponentsStyles/addClinic.css'

const Form = styled(FormControl)`
    left:35%;
    width: 30%;
    margin-top:100px;
    backgroundColor:transparent;

`

const FormField = styled(TextField)`
    margin:10px;
`

const Submit = styled(Button)`
    width:30%;
    left:30%;
`
const EditClinic = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [clinic, setClinic] = useState({
        clinicName:'',
        country:'',
        clinicLocation:'',
        clinicPhone:''
    })

    const handleChange = (e) => {
        setClinic({...clinic, [e.target.name]: e.target.value})
    }

    const getClinic = async() => {
        const getClinicById = await axios.get(`${env.backend_url_admin}/edit-clinic/${id}`)
        const {clinicName, country, clinicLocation, clinicPhone} = getClinicById
        setClinic(getClinicById.data)
        console.log(clinic)
        console.log(getClinicById)
    }

    useEffect(() => {
        getClinic()
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.put(`${env.backend_url_admin}/edit-clinic/${id}`,clinic )
        console.log(res);
        navigate('/adminHome/remove-clinic')
    }
  return (
    <div className='clinic-form'>
        <form onSubmit={handleSubmit}>
            <Form>
                <FormField id="outlined-basic" label="Clinic Name" variant="outlined" name="clinicName" value={clinic.clinicName} onChange={handleChange} />
                <FormField id="outlined-basic" label="Country" variant="outlined" name='country' value={clinic.country} onChange={handleChange} />
                <FormField id="outlined-textarea"
                    label="Clinic Address"
                    placeholder="Placeholder"
                    multiline 
                    name='clinicLocation' value={clinic.clinicLocation} onChange={handleChange}/>
                <FormField id="outlined-basic" label="Clinic Phone" variant="outlined" name='clinicPhone' value={clinic.clinicPhone} onChange={handleChange} />
                <Submit variant="contained" color="primary" type="submit">
                    Edit Clinic
                </Submit>
            </Form>

        </form>

    </div>
  )
}

export default EditClinic