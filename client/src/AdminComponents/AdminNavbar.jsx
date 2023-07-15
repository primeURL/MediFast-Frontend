import React from 'react'
import '../AdminComponentsStyles/adminNavbar.css'
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
    
      <nav className="navbar">
          <ul className="navbar__menu">
              <li className="navbar__item"><Link to='/adminHome/add-new-doctor'>Add Doctors/Consultant</Link></li>
              <li className='navbar__item'><Link to='/adminHome/remove-doctors'>Remove Doctors</Link></li>
              <li className="navbar__item"><Link to='/adminHome/add-clinic'>Add Clicnic</Link></li>
              <li className="navbar__item">Add FAQ</li>
              <li className="navbar__item">Change pricing</li>
          </ul>
          <p>Welcome {userName}</p>
          <ul className='logoutBtn'>
              <li className="navbar__item navbar__logout" onClick={handleLogout}>Logout</li>
          </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default AdminNavbar