import React, { useEffect, useState } from 'react'
import axios from 'axios'
import env from '../env.json'
import '../doctorStyles/myappointment.css'
import Swal from 'sweetalert2'

const MyAppointment = () => {
  const id = localStorage.getItem('id')
  const [data,setData] = useState([])
  useEffect(()=>{
    async function getAppointment(){
      try {
        const {data} = await axios.get(`${env.backend_url_bookedDoctor}/getAppointment/${id}`)
        console.log(data);
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }
    getAppointment()
  },[])
  async function handleConfirmAppoitment(id){
    try {
      Swal.fire({
        title: 'Are you sure? You want to confirm Appointment',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then(async(result) => {
        if (result.isConfirmed) {
          const {data} = await axios.get(`${env.backend_url_bookedDoctor}/updateStatus/${id}`)
          Swal.fire(
            'Appointment Booked',
            'success'
          )
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div>
      {data.toReversed().map((d)=>{
        return (
          <div className='appointmentContainer'>
            <h3 className='myappointmentHeading'><b>Patient Name :</b> {d.patientName}</h3>
            <p><b>Patient Issue :</b> {d.patientIssue}</p>
            <p><b>Appointment Day :</b> {d.appointmentDay[0].value}</p>
            <p><b>Patient Time : </b>{d.patientTime}</p>
            <p><b>Patient Email :</b> {d.patientEmail}</p>
            <p><b>Appointment Status :</b> {d.appointmentStatus}</p>
            <button className='myappointmentBtn' onClick={()=>handleConfirmAppoitment(d._id)}>Confirm Appointment</button>
          </div>
        )
      })}
    </div>
    </>
    
  )
}

export default MyAppointment