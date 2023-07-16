import React, {useState, useEffect} from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import '../AdminComponentsStyles/removeDoc.css'
import axios from 'axios';
import env from '../env.json';
const StyledTable= styled(Table)`
  width:90%;
  margin: 50px auto 0 auto
`

const StyledColoumn = styled(TableRow)`
    align-items:center;
    font-weight:bold;
`
const RemoveDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const handleClick = async(id) => {
        const response = await axios.delete(`${env.backend_url_admin}/delete/${id}`)
        fetchDoctors()
        console.log(response)
    }
    async function fetchDoctors(){
        const {data} = await axios.get(`${env.backend_url_getPatientInfo}/doctorConsultant`)
        setDoctors(data)
        console.log('d', doctors)

    }
 useEffect(() => {
    fetchDoctors()
 },[])

  return (
    <StyledTable>
        <TableHead>
            <TableRow>
                <TableCell>Doctor's Name</TableCell>
                <TableCell>Qualification</TableCell>
                <TableCell>Speciality</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Available Days</TableCell>
                <TableCell>Consultation Fee</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                doctors.map((doc) => (
                    <TableRow className='data__row' key={doc._id}>
                        <TableCell>{doc.doctorName}</TableCell>
                        <TableCell>{doc.qualification}</TableCell>
                        <TableCell>{doc.speciality}</TableCell>
                        <TableCell>{doc.experience}</TableCell>
                        <TableCell>{doc.avaliableDays.map((aD)=>{return <span>{aD.value} | </span>})}</TableCell>
                        <TableCell>{doc.consultationFee}</TableCell>
                        <TableCell><Button variant="contained">Edit</Button></TableCell>
                        <TableCell><Button variant="contained" onClick={()=>handleClick(doc._id)}>Delete</Button></TableCell>
                        
                    </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
  )
}

export default RemoveDoctors