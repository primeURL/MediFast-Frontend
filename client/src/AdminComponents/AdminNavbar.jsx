import React from 'react'
import '../AdminComponentsStyles/adminNavbar.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const AdminNavbar = () => {
  return (
    <>
    
      <nav className="navbar">
          <ul className="navbar__menu">
              <li className="navbar__item"><Link to='/adminHome/add-new-doctor'>Add Doctors/Consultant</Link></li>
              <li className="navbar__item">Add Clinic</li>
              <li className="navbar__item">Add FAQ</li>
              <li className="navbar__item">Change pricing</li>
          </ul>
          <ul className='logoutBtn'>
              <li className="navbar__item navbar__logout">Logout</li>
          </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default AdminNavbar