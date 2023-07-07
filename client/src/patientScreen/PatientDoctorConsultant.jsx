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
      consultation: '$10'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      qualifications: 'MD, FAAD',
      experience: '8+ years',
      availability: 'Mon-Fri, 10am-6pm',
      consultation: '$12'
    },
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      qualifications: 'MD, FACC',
      experience: '10+ years',
      availability: 'Mon-Fri, 9am-5pm',
      consultation: '$8'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      qualifications: 'MD, FAAD',
      experience: '8+ years',
      availability: 'Mon-Fri, 10am-6pm',
      consultation: '$11'
    },
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      qualifications: 'MD, FACC',
      experience: '10+ years',
      availability: 'Mon-Fri, 9am-5pm',
      consultation: '$8'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      qualifications: 'MD, FAAD',
      experience: '8+ years',
      availability: 'Mon-Fri, 10am-6pm',
      consultation: '$9'
    },
    // Add more doctors/consultants as needed
  ];

  return (
    <div className="doctors-page">
      <h2 className="doctors-title">Doctors and Consultants</h2>
      <h4>6 Doctors are available near you</h4>
      <div className='all__doctors__cards'>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-info"><strong>Specialty:</strong> {doctor.specialty}</p>
            <p className="doctor-info"><strong>Qualifications:</strong> {doctor.qualifications}</p>
            <p className="doctor-info"><strong>Experience:</strong> {doctor.experience}</p>
            <p className="doctor-info"><strong>Availability:</strong> {doctor.availability}</p>
            <p className='doctor-consultation-fee'><strong>Consultation Fee:</strong> {doctor.consultation}</p>
            <button class="button-62" role="button">Book Clinic Visit</button>
            <hr className="divider" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default PatientDoctorConsultant;
