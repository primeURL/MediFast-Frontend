import React from 'react'
import '../patientStyles/patientFeatures.css'
import consultant from '../patientComponentsAssets/consultant.jpg'
import image2 from '../patientComponentsAssets/image2.jpg'
import image3 from '../patientComponentsAssets/image3.jpg'
import image4 from '../patientComponentsAssets/image4.jpg'
import image5 from '../patientComponentsAssets/image5.jpg'
import image6 from '../patientComponentsAssets/image6.jpg'
import {BiSolidOffer} from 'react-icons/bi';
const PatientFeatures = () => {
  return (
    <div className="body">
        <div className='features_cards'>
            <div className="all_cards">
                <div className="card">
                    <img src={consultant} alt="" />
                    
                    <p><b>One Change Group’s therapists are prepared to guide you on your journey to healthy change. We offer licensed, secure, confidential, online HIPAA compliant counseling. We are currently accepting new clients in Oregon and Idaho and would be happy to explore your needs</b>.</p>
                </div>
                <div className="card">
                    <img src={image2} alt="" />
                    
                    <p><b>Flat 30% off on your first appointment. Hurry!</b></p>
                </div>
                <div className="card">
                    <img src={image3} alt="" />
                    
                    <p><b>Comprehensive health check-ups for early detection and personalized care</b></p>
                </div>
                <div className="card">
                    <img src={image4} alt="" />
                    
                    <p><b>Providing skilled and compassionate surgical care for your health needs</b></p>
                </div>
                <div className="card">
                    <img src={image5} alt="" />
                    <p><b>One Change Group’s therapists are prepared to guide you on your journey to healthy change. We offer licensed, secure, confidential, online HIPAA compliant counseling. We are currently accepting new clients in Oregon and Idaho and would be happy to explore your needs</b>.</p>
                </div>
                <div className="card">
                    <img src={image6} alt="" />
                    <p><b>One Change Group’s therapists are prepared to guide you on your journey to healthy change. We offer licensed, secure, confidential, online HIPAA compliant counseling. We are currently accepting new clients in Oregon and Idaho and would be happy to explore your needs</b>.</p>
                </div>
            </div>
        </div>

    </div>
  
  )
}


export default PatientFeatures