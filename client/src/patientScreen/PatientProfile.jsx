import { useEffect,useState } from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import env from '../env.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Tag } from 'antd';
import '../patientStyles/patientProfile.css'
const PatientProfile = () => {
  const [userDetails,setUserDetails] = useState({})
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('userName')
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/patientHome')
    }
    async function getUserDetails(){
      try {
        const {data} = await axios.get(`${env.backend_url_patient}/getPatientDetails/${userId}`)
        console.log(data);
        setUserDetails(data)
      } catch (error) {
        console.log(error);
      }
  }
  getUserDetails()
  },[])
  return (
    <div>
    <Tabs defaultActiveKey="1" className='pContainer'>
      <TabPane tab="Profile" key="1" className='pProfile'>
         <p>Name : <b>{userDetails.firstName} {userDetails.lastName}</b></p>
          <p>Email : <b>{userDetails.email}</b></p>
          <p>UserName : <b>{userDetails.userName}</b></p>
          <p>Admin Rights : <b>{userDetails.isAdmin ? 'Yes' : 'No'}</b></p>
      </TabPane>
      <TabPane tab="My Appointments" key="2">
        <MyAppointments/>
      </TabPane>
    </Tabs>
  </div>
  )
}

export default PatientProfile


export function MyAppointments(){
  const [data,setData] = useState([])
  const id = localStorage.getItem('userId')
  useEffect(()=>{
      async function getAppointments(){
        try {
          const {data} = await axios.get(`${env.backend_url_bookedDoctor}/getPatientsAppointment/${id}`)
          console.log(data);
          setData(data)
        } catch (error) {
          console.log(error);
        }
      }
      getAppointments()
  },[])
  return (
    <div>
    {data.toReversed().map((d)=>{
      return (
        <div className='profileAppointmentContainer'>
          <h3><b>Patient Name :</b> {d.patientName}</h3>
          <p><b>Patient Issue :</b> {d.patientIssue}</p>
          <p><b>Appointment Day :</b> {d.appointmentDay[0].value}</p>
          <p><b>Patient Time : </b>{d.patientTime}</p>
          <p><b>Patient Email :</b> {d.patientEmail}</p>
          <p><b>Appointment Status :</b> {d.appointmentStatus == 'Pending' ? <Tag bordered={false} color="error">PENDING</Tag> : <Tag bordered={false} color="success">CONFIRMED</Tag>}</p>
        </div>
        )
    })}
  </div>
  )
}

