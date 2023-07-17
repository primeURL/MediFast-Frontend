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
const RemoveClinic = () => {
    const [clinic, setClinic] = useState([])
    const handleClick = async(id) => {
        const response = await axios.delete(`${env.backend_url_admin}/remove-clinic/${id}`)
        fetchDoctors()
        console.log(response)
    }
    async function fetchDoctors(){
        const {data} = await axios.get(`${env.backend_url_getPatientInfo}/allclinic`)
        setClinic(data)

    }
 useEffect(() => {
    fetchDoctors()
 },[])

  return (
    <StyledTable>
        <TableHead>
            <TableRow>
                <TableHeader>Clinic's Name</TableHeader>
                <TableHeader>Country</TableHeader>
                <TableHeader>Clinic's Location</TableHeader>
                <TableHeader>Clinic's Phone</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                clinic.map((doc) => (
                    <TableRow className='data__row' key={doc._id}>
                        <TableCell>{doc.clinicName}</TableCell>
                        <TableCell>{doc.country}</TableCell>
                        <TableCell>{doc.clinicLocation}</TableCell>
                        <TableCell>{doc.clinicPhone}</TableCell>
                        <EditButton><EditButton variant="contained"><Link to={`/adminHome/edit-clinic/${doc._id}`}>Edit</Link></EditButton></EditButton>
                        <TableCell><Button variant="contained" onClick={()=>handleClick(doc._id)}>Delete</Button></TableCell>
                        
                    </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
  )
}

export default RemoveClinic