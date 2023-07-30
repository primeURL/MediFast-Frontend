import React, { useEffect, useState } from 'react';
import '../patientStyles/patientDoctorConsultant.css'
import axios from 'axios';
import env from '../env.json'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import Swal from 'sweetalert2'
import StripeCheckout from 'react-stripe-checkout';
import Loader from '../commonComponents/Loader'
const PatientDoctorConsultant = () => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    patientEmail:'',
    patientIssue:'',
    appointmentDay:'',
    patientTime:'',
    doctorId:'',
  })
  const [loading,setLoading] = useState(false)
  const handleChange = (e) => {
    setAppointment({...appointment, [e.target.name]: e.target.value})
  }
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false)
  let [totalAmount,setTotalAmount] = useState(null)
  const handleShow = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const [doctors,setDoctors] = useState([])
  const animatedComponents = makeAnimated();
  const [id, setId] = useState('')
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
      { value: 'Monday',label: 'Monday'},
      { value: 'Tuesday',label: 'Tuesday'},
      { value: 'Wednesday',label: 'Wednesday'},
      { value: 'Thursday',label: 'Thursday'},
      { value: 'Friday',label: 'Friday'},
      { value: 'Saturday',label: 'Saturday'},
      { value: 'Sunday', label: 'Sunday'},
  ]

  const handleSubmit = async() =>{
    // appointment.appointmentDay = selectedOption
    // appointment.patientId = userId
    // appointment.doctorId = id
    // console.log(appointment);
    // try {
    //   const {data} = await axios.post(env.backend_url_bookedDoctor,appointment)
    //   console.log(data);
    //   Swal.fire({
    //     icon: 'success',
    //     title: data,
    //   })
    //   setIsOpen(false)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const idFun = (id,fee) => {
    console.log(id)
    if(!token){
      Swal.fire({
        icon: 'error',
        title: 'Login Required',
        footer: 'You will be Redirecting to Login Page Page.'
      }).then(()=>{
        window.location.href = '/patientHome/patientLogin'
        return
      })
    }else{  
      totalAmount = fee
      setTotalAmount(totalAmount)
      setId(id)
      setIsOpen(true)
    }
  
  }
  useEffect(()=>{
    async function fetchDoctors(){
      try {
        const {data} = await axios.get(`${env.backend_url_getPatientInfo}/doctorConsultant`)
        console.log(data);
        setDoctors(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDoctors()
  },[])
  // function handleBtnClick(fee){
  //   totalAmount = fee
  //   setTotalAmount(totalAmount)
  //   console.log('fee123',(totalAmount));
  //   console.log('fee123',typeof totalAmount);

  // }
  async function onToken(token){
    console.log(token);
    appointment.appointmentDay = selectedOption
    appointment.patientId = userId
    appointment.doctorId = id
    appointment.token = token
    appointment.totalAmount = totalAmount
    console.log(appointment);
    try {
      setLoading(true)
      const {data} = await axios.post(env.backend_url_bookedDoctor,appointment)
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: data,
        footer : "Check Profile Page for the Status"
      })
      setLoading(false)
      setIsOpen(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  return (
    <>
    {loading ? <Loader/> : ( <div className="doctors-page">
      <h2 className="doctors-title">Doctors and Consultants</h2>
      <h4>{doctors.length} Doctors are available near you</h4>
      <div className='all__doctors__cards'>
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctor-card">
            <h3 className="doctor-name">{doctor.doctorName}</h3>
            <p className="doctor-info"><strong>Specialty:</strong> {doctor.speciality}</p>
            <p className="doctor-info"><strong>Qualifications:</strong> {doctor.qualification}</p>
            <p className="doctor-info"><strong>Experience:</strong> {doctor.experience} Years</p>
            <p className="doctor-info"><strong>Avaliable Days:</strong> {doctor.avaliableDays.map((aD)=>{return <span>{aD.value} | </span>})}</p>
            <p className="doctor-info"><strong>Avaliable Time:</strong> {doctor.startTime} to {doctor.endTime} </p>
            <p className='doctor-consultation-fee'><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
            <button class="button-62" role="button" onClick={() =>idFun(doctor._id,doctor.consultationFee)}>Book Clinic Visit</button>
            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Book Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <label>Name:</label>
                    <input className='patient__form__input' type='text' name='patientName' value={appointment.patientName} onChange={handleChange}/>
                    <label>Email:</label>
                    <input className='patient__form__input' type='email' name='patientEmail' value={appointment.patientEmail} onChange={handleChange}/>
                    <label>Issue:</label>
                    <input className='patient__form__input' type='text' name='patientIssue' value={appointment.patientIssue} onChange={handleChange}/>
                    <label>Appointment Day:</label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={setSelectedOption}
                        defaultValue={selectedOption}
                        isMulti
                        options={options}
                      />
                      <label>Appointment Time</label>
                      <input className='patient__form__input' type='time' name='patientTime' value={appointment.patientTime} onChange={handleChange}/>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <StripeCheckout
                    token={onToken}
                    currency='INR'
                    amount={totalAmount * 100}
                    stripeKey={import.meta.env.VITE_APP_PUBLISH_KEY}
                  > <Button variant="primary">
                  Schedule Appointment
                </Button></StripeCheckout>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </div>)}
   
    </>
  );
};

export default PatientDoctorConsultant;

