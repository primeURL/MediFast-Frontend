import Login from "./patientAuth/Login"
import SignUp from "./patientAuth/SignUp"
import Navbar from "./patientComponents/Navbar"
import Dashboard from './commonComponents/Dashboard';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/patientLogin" element={<Login/>}></Route>
        <Route path="/patientNavbar" element={<Navbar/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
