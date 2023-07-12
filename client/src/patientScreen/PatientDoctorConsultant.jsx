import React, { useEffect, useState } from 'react';
import '../patientStyles/patientDoctorConsultant.css'
import axios from 'axios';
import env from '../env.json'
const PatientDoctorConsultant = () => {
  // const doctors = [
  //   {
  //     id: 1,
  //     name: 'Dr. John Doe',
  //     specialty: 'Cardiology',
  //     qualifications: 'MD, FACC',
  //     experience: '10+ years',
  //     availability: 'Mon-Fri, 9am-5pm',
  //     consultation: '$10'
  //   },
  //   {
  //     id: 2,
  //     name: 'Dr. Jane Smith',
  //     specialty: 'Dermatology',
  //     qualifications: 'MD, FAAD',
  //     experience: '8+ years',
  //     availability: 'Mon-Fri, 10am-6pm',
  //     consultation: '$12'
  //   },
  //   {
  //     id: 1,
  //     name: 'Dr. John Doe',
  //     specialty: 'Cardiology',
  //     qualifications: 'MD, FACC',
  //     experience: '10+ years',
  //     availability: 'Mon-Fri, 9am-5pm',
  //     consultation: '$8'
  //   },
  //   {
  //     id: 2,
  //     name: 'Dr. Jane Smith',
  //     specialty: 'Dermatology',
  //     qualifications: 'MD, FAAD',
  //     experience: '8+ years',
  //     availability: 'Mon-Fri, 10am-6pm',
  //     consultation: '$11'
  //   },
  //   {
  //     id: 1,
  //     name: 'Dr. John Doe',
  //     specialty: 'Cardiology',
  //     qualifications: 'MD, FACC',
  //     experience: '10+ years',
  //     availability: 'Mon-Fri, 9am-5pm',
  //     consultation: '$8'
  //   },
  //   {
  //     id: 2,
  //     name: 'Dr. Jane Smith',
  //     specialty: 'Dermatology',
  //     qualifications: 'MD, FAAD',
  //     experience: '8+ years',
  //     availability: 'Mon-Fri, 10am-6pm',
  //     consultation: '$9'
  //   },
  //   // Add more doctors/consultants as needed
  // ];
  const [doctors,setDoctors] = useState([])
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
          <div key={doctor.id} className="doctor-card">
            <h3 className="doctor-name">{doctor.doctorName}</h3>
            <p className="doctor-info"><strong>Specialty:</strong> {doctor.speciality}</p>
            <p className="doctor-info"><strong>Qualifications:</strong> {doctor.qualification}</p>
            <p className="doctor-info"><strong>Experience:</strong> {doctor.experience} Years</p>
            <p className="doctor-info"><strong>Avaliable Days:</strong> {doctor.avaliableDays.map((aD)=>{return <span>{aD.value} | </span>})}</p>
            <p className="doctor-info"><strong>Avaliable Time:</strong> {doctor.startTime} to {doctor.endTime} </p>
            <p className='doctor-consultation-fee'><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
            <button class="button-62" role="button">Book Clinic Visit</button>
            {/* <hr className="divider" /> */}
          </div>
        ))}

      </div>
    </div>
  );
};

export default PatientDoctorConsultant;
