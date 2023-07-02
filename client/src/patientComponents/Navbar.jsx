import React from 'react'
import { Link,useNavigate} from "react-router-dom";
import '../patientStyles/navbar.css'
const Navbar = () => {
  return (
    <nav className='nav-all'>

      <div className='nav-right'>
        <ul>
          <li><Link to=''>Features</Link></li>
          <li><a href='#'>Pricing and Appointment</a></li>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Find Clinic</a></li>
          <li><a href='#'>Contact US</a></li>
          <li><a href='#'>Doctor and Consultant</a></li>
          <li><a href='#'>About US</a></li>
        </ul>
      </div>

      <div className='nav-left'>
        <ul>
          <li><a href='#'>Profile</a></li>
        </ul>
        <button><Link>Login</Link></button>
      </div>
    </nav>
  )
}

export default Navbar