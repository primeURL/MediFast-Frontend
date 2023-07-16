import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from "react-router-dom";
import '../patientStyles/patientNavbar.css'
const DoctorNavbar = () => {
  const navigate = useNavigate()
  const [logoutBtn,setLogutBtn] = useState(false)
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(token){
      setLogutBtn(true)
    }
  },[token])
  function handleLogout(){
    localStorage.removeItem('token')
    navigate('/')
    // window.location.href = '/';
  }
 
  return (
    <>
      <nav className='nav-all'>
        <div className='nav-right'>
          <ul>
            <li><Link to='/doctorHome/patientRecord'>Patient Record</Link></li>
            <li><Link to='/doctorHome/myAppointment'>My Appointment</Link></li>
            <li><Link to='/doctorHome/prescription'>Prescription</Link></li>
            <li><Link to='/doctorHome/medicalHistory'>Medical History</Link></li>
          </ul>
        </div>

        <div className='nav-left'>
          {/* <ul>
            <li><a href='#'>Profile</a></li>
          </ul> */}
          {!logoutBtn && (<button onClick={()=>(navigate('/doctorHome/doctorLogin'))}>Login</button>)}
          {logoutBtn && (<button onClick={handleLogout}>LogOut</button>)}
        </div>
      </nav>
    </>
  
  )
}

export default DoctorNavbar

