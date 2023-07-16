import React, { useEffect, useState } from 'react';
import '../patientStyles/patientDoctorConsultant.css'
import axios from 'axios';
import env from '../env.json'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import Swal from 'sweetalert2'
const PatientDoctorConsultant = () => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    patientPhone:'',
    patientIssue:'',
    appointmentDay:'',
    patientTime:'',
    doctorId:'',
  })
  const handleChange = (e) => {
    setAppointment({...appointment, [e.target.name]: e.target.value})
  }
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false)
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
    appointment.appointmentDay = selectedOption
    appointment.patientId = userId
    appointment.doctorId = id
    console.log(appointment);
    try {
      const {data} = await axios.post(env.backend_url_bookedDoctor,appointment)
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: data,
      })
      setIsOpen(false)
    } catch (error) {
      console.log(error);
    }
  }

  const idFun = (id) => {
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
      setId(id)
      setIsOpen(true)
    }
  
  }
  useEffect(()=>{
    console.log('hello')
    
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
  return (
    <div className="doctors-page">
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
            <button class="button-62" role="button" onClick={() =>idFun(doctor._id)}>Book Clinic Visit</button>
            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Book Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <label>Name:</label>
                    <input className='patient__form__input' type='text' name='patientName' value={appointment.patinetName} onChange={handleChange}/>
                    <label>Phone:</label>
                    <input className='patient__form__input' type='number' name='patientPhone' value={appointment.patientPhone} onChange={handleChange}/>
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
                <Button variant="primary" onClick={() => handleSubmit()}>
                  Schedule Appointment
                </Button>
              </Modal.Footer>
            </Modal>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default PatientDoctorConsultant;

