import PatientLogin from "./patientAuth/PatientLogin"
import PatientSignUp from "./patientAuth/PatientSignUp"
import Dashboard from './commonComponents/Dashboard';
import Home from "./patientScreen/Home";
import PatientFeatures from "./patientScreen/PatientFeatures";
import PatientPricingAppointment from "./patientScreen/PatientPricingAppointment";
import PatientFaq from "./patientScreen/PatientFaq";
import PatientFindClinic from "./patientScreen/PatientFindClinic";
import PatientContactUs from "./patientScreen/PatientContactUs";
import PatientDoctorConsultant from './patientScreen/PatientDoctorConsultant';
import PatientAboutUs from "./patientScreen/PatientAboutUs";
import PatientProfile from "./patientScreen/PatientProfile";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/patientHome" element={<Home/>}>
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
        
      </Routes>
    </>
  )
}

export default App
