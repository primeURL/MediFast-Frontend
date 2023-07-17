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
const TableHeader = styled(TableCell)`
    font-weight:bold;
    font-size:18px;
`

const EditButton = styled(TableCell)`
    color: blue
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
                <TableHeader>Doctor's Name</TableHeader>
                <TableHeader>Qualification</TableHeader>
                <TableHeader>Speciality</TableHeader>
                <TableHeader>Experience</TableHeader>
                <TableHeader>Available Days</TableHeader>
                <TableHeader>Consultation Fee</TableHeader>
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
                        <EditButton><EditButton variant="contained"><Link to={`/adminHome/edit-doctor/${doc._id}`}>Edit</Link></EditButton></EditButton>
                        <TableCell><Button variant="contained" onClick={()=>handleClick(doc._id)}>Delete</Button></TableCell>
                        
                    </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
  )
}

export default RemoveDoctors