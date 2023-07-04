import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../patientStyles/patientPricingAppointment.css'
const PatientPricingAppointment = () => {
  return (
    <>
    <div>
      <Pricing/>
      <Appointment/>
    </div>
    </>
  )
}

export default PatientPricingAppointment



export function Pricing(){
  const pricingData = [
    {
      title: 'Basic Package',
      price: '$19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard Package',
      price: '$29.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium Package',
      price: '$49.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];
  return (
    <>
     <div className="pricing-container">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-cards">
        {pricingData.map((pricing, index) => (
          <div key={index} className="pricing-card">
            <h3 className="package-title">{pricing.title}</h3>
            <p className="package-price">{pricing.price}</p>
            <ul className="package-features">
              {pricing.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}


export function Appointment(){
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [location, setLocation] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const doctors = [
    'Dr. John Doe',
    'Dr. Jane Smith',
    'Dr. Alex Johnson',
    'Dr. Emily Brown',
  ];
  const locations = [
    'Pune',
    'Pune Aundh',
    'Mumbai',
    'Nashik',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(date, time, doctor, location)
    console.log('Form submitted:', { date, time, doctor, location });
    // Reset form fields
    setDate('');
    setTime('');
    setDoctor('');
    setLocation('');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book My Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="appointment-container">
            <form className="appointment-form">
              <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input" />
              </label>
              <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-input" />
              </label>
              <label>
                Doctor:
                <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="form-input">
                  <option value="">Select a doctor</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc}>{doc}</option>
                  ))}
                </select>
              </label>
              <label>
                Location:
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="form-input">
                  <option value="">Select a location</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>{loc}</option>
                  ))}
                </select>
              </label>
            </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
          Schedule Appointment
          </Button>
        </Modal.Footer>
      </Modal>
 



</>
  );
};



