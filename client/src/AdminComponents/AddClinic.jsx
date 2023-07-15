import React, {useState} from 'react'
import { FormControl, InputLabel, FormHelperText, Input, TextField, styled, Button } from '@mui/material';
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
const AddClinic = () => {
    const [clinic, setClinic] = useState({
        clinicName:'',
        country:'',
        clinicLocation:'',
        clinicPhone:''
    })

    const handleChange = (e) => {
        setClinic({...clinic, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(clinic);
    }
  return (
    <div className='clinic-form'>
        <Form onSubmit={handleSubmit}>
            <FormField id="outlined-basic" label="Clinic Name" variant="outlined" name="clinicName" value={clinic.clinicName} onChange={handleChange} />
            <FormField id="outlined-basic" label="Country" variant="outlined" name='country' value={clinic.country} onChange={handleChange} />
            <FormField id="outlined-textarea"
                label="Clinic Address"
                placeholder="Placeholder"
                multiline 
                name='clinicLocation' value={clinic.clinicLocation} onChange={handleChange}/>
            <FormField id="outlined-basic" label="Clinic Phone" variant="outlined" name='clinicPhone' value={clinic.clinicPhone} onChange={handleChange} />
            <Submit variant="contained" color="primary" type="submit">
                Add Clinic
            </Submit>
        </Form>

    </div>
  )
}

export default AddClinic