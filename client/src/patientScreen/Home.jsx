import React from 'react'
import PatientNavbar from '../patientComponents/PatientNavbar';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
        <div><PatientNavbar/></div>
        <Outlet/>
    </>
    
  )
}

export default Home