import '../patientStyles/patientPricingAppointment.css'
import {BsCheck} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
const PatientPricingAppointment = () => {
  return (
    <>
    <div>
      <Pricing/>
    </div>
    </>
  )
}

export default PatientPricingAppointment

export function Pricing(){
  const navigate = useNavigate()
  const pricingData = [
    {
      title: 'Basic',
      price: '$19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard',
      price: '$29.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium',
      price: '$49.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];
  function handleClick(){
    navigate('/patientHome/doctor-consultant')
  }
  return (
    <>
     <div className="pricing-container">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-cards">
        {pricingData.map((pricing, index) => (
          <div key={index} className="pricing-card">
            <div className="card_contents">
              <h3 className="package-title">{pricing.title}</h3>
              <p className="package-price">{pricing.price}</p>
              <ul className="package-features">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="feature-item"><BsCheck/>{feature}</li>
                  
                ))}
              </ul>
              <button class="button-32" role="button" onClick={handleClick}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}



