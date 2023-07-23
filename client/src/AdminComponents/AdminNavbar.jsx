import React from 'react'
import '../patientStyles/patientNavbar.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
  const navigate = useNavigate()
  function handleLogout(){
    navigate('/')
  }
  const userName = localStorage.getItem('userName')
  return (
    <>
    
      <nav className="nav-all">
        <div className='nav-right'>
          <ul className="navbar__menu">
              <li className="navbar__item"><Link to='/adminHome/add-new-doctor'>Add Doctors/Consultant</Link></li>
              <li className='navbar__item'><Link to='/adminHome/remove-doctors'>Edit Doctors</Link></li>
              <li className="navbar__item"><Link to='/adminHome/add-clinic'>Add Clinic</Link></li>
              <li className="navbar__item"><Link to='/adminHome/remove-clinic'>Edit Clinic</Link></li>
              
          </ul>

        </div>
        <div className="nav-left">
          <p className='admin-para'>Welcome {userName}</p>
          <button onClick={handleLogout}>Logout</button>
      

        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default AdminNavbar