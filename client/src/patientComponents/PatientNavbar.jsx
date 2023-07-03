import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from "react-router-dom";
import '../patientStyles/navbar.css'
const PatientNavbar = () => {
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
            <li><Link to='/patientHome/features'>Features</Link></li>
            <li><Link to='/patientHome/pricing-appointment'>Pricing and Appointment</Link></li>
            <li><Link to='/patientHome/faq'>FAQ</Link></li>
            <li><Link to='/patientHome/find-clinic'>Find Clinic</Link></li>
            <li><Link to='/patientHome/contact'>Contact US</Link></li>
            <li><Link to='/patientHome/doctor-consultant'>Doctor and Consultant</Link></li>
            <li><Link to='/patientHome/about'>About US</Link></li>
          </ul>
        </div>

        <div className='nav-left'>
          {/* <ul>
            <li><a href='#'>Profile</a></li>
          </ul> */}
          {logoutBtn && (<button onClick={()=>(navigate('/patientHome/profile'))}>Profile</button>)}
          {!logoutBtn && (<button onClick={()=>(navigate('/patientHome/patientLogin'))}>Login</button>)}
          {logoutBtn && (<button onClick={handleLogout}>LogOut</button>)}
        </div>
      </nav>
    </>
  
  )
}

export default PatientNavbar

