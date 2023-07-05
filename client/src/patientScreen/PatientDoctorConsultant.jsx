import React from 'react';
import '../patientStyles/patientDoctorConsultant.css'
const PatientDoctorConsultant = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      qualifications: 'MD, FACC',
      experience: '10+ years',
      availability: 'Mon-Fri, 9am-5pm',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      qualifications: 'MD, FAAD',
      experience: '8+ years',
      availability: 'Mon-Fri, 10am-6pm',
    },
    // Add more doctors/consultants as needed
  ];

  return (
    <div className="doctors-page">
      <h2 className="doctors-title">Doctors and Consultants</h2>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-info"><strong>Specialty:</strong> {doctor.specialty}</p>
          <p className="doctor-info"><strong>Qualifications:</strong> {doctor.qualifications}</p>
          <p className="doctor-info"><strong>Experience:</strong> {doctor.experience}</p>
          <p className="doctor-info"><strong>Availability:</strong> {doctor.availability}</p>
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default PatientDoctorConsultant;
