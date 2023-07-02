import React from 'react'
import './nav.css'
const Navbar = () => {
  return (
    <nav className='nav-all'>

      <div className='nav-right'>
        <ul>
          <li><a href='#'>Features</a></li>
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
        <button>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar