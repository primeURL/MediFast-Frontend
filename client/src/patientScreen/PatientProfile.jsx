import { useEffect,useState } from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import env from '../env.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
      </TabPane>
    </Tabs>
  </div>
  )
}

export default PatientProfile