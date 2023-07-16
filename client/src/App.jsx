import PatientLogin from "./patientAuth/PatientLogin"
import PatientSignUp from "./patientAuth/PatientSignUp"
import Dashboard from './commonComponents/Dashboard';
import PatientHome from "./patientScreen/PatientHome";
import PatientFeatures from "./patientScreen/PatientFeatures";
import PatientPricingAppointment from "./patientScreen/PatientPricingAppointment";
import PatientFaq from "./patientScreen/PatientFaq";
import PatientFindClinic from "./patientScreen/PatientFindClinic";
import PatientContactUs from "./patientScreen/PatientContactUs";
import PatientDoctorConsultant from './patientScreen/PatientDoctorConsultant';
import PatientAboutUs from "./patientScreen/PatientAboutUs";
import PatientProfile from "./patientScreen/PatientProfile";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminComponents/AdminNavbar";
import AddDoctors from "./AdminComponents/AddDoctors";
import AdminLogin from "./adminAuth/adminLogin";
import AdminSignUp from "./adminAuth/adminSignUp";
import DoctorHome from "./doctorScreen/DoctorHome";
import PatientRecord from "./doctorScreen/PatientRecord";
import MyAppointment from "./doctorScreen/MyAppointment";
import Prescription from "./doctorScreen/Prescription";
import MedicalHistory from "./doctorScreen/MedicalHistory";
import DoctorLogin from './doctorScreen/DoctorLogin'
import RemoveDoctors from './AdminComponents/RemoveDoctors';
import AddClinic from './AdminComponents/AddClinic'
import RemoveClinic from "./AdminComponents/RemoveClinic";
function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/patientHome" element={<PatientHome/>}>
            <Route path="" element={<PatientFeatures/>}></Route>
            <Route path="patientLogin" element={<PatientLogin/>}></Route>
            <Route path="patientSignup" element={<PatientSignUp/>}></Route>
            <Route path="features" element={<PatientFeatures/>}></Route>
            <Route path="pricing-appointment" element={<PatientPricingAppointment/>}></Route>
            <Route path="faq" element={<PatientFaq/>}></Route>
            <Route path="find-clinic" element={<PatientFindClinic/>}></Route>
            <Route path="contact" element={<PatientContactUs/>}></Route>
            <Route path="doctor-consultant" element={<PatientDoctorConsultant/>}></Route>
            <Route path="about" element={<PatientAboutUs/>}></Route>
            <Route path="profile" element={<PatientProfile/>}></Route>
         </Route>
         <Route path="/doctorHome" element={<DoctorHome/>}>
              <Route path="" element={<PatientRecord/>}></Route>
              <Route path="doctorLogin" element={<DoctorLogin/>}></Route>
              <Route path="patientRecord" element={<PatientRecord/>}></Route>
              <Route path="myAppointment" element={<MyAppointment/>}></Route>
              <Route path="prescription" element={<Prescription/>}></Route>
              <Route path="medicalHistory" element={<MedicalHistory/>}></Route>
         </Route>


        <Route path="/adminLogin" element={<AdminLogin/>}></Route>
        <Route path="/adminSignup" element={<AdminSignUp/>}></Route>

        <Route path="/adminHome" element={<AdminNavbar/>}>
            <Route path="add-new-doctor" element={<AddDoctors/>}></Route>
            <Route path="remove-doctors" element={<RemoveDoctors/>}></Route>
            <Route path="add-clinic" element={<AddClinic/>}></Route>
            <Route path="remove-clinic" element={<RemoveClinic/>}></Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
