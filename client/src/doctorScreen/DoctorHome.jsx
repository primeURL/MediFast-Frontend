import React from 'react'
import DoctorNavbar from '../doctorComponents/DoctorNavbar'
import { Outlet } from 'react-router-dom'
const DoctorHome = () => {
  return (
    <>
    <DoctorNavbar/>
    <Outlet/>
    </>
  )
}

export default DoctorHome