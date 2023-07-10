import React from 'react'
import '../patientStyles/patientFeatures.css'
import consultant from '../patientComponentsAssets/consultant.jpg'
import image2 from '../patientComponentsAssets/image2.jpg'
import image3 from '../patientComponentsAssets/image3.jpg'
import image4 from '../patientComponentsAssets/image4.jpg'
import image5 from '../patientComponentsAssets/image5.jpg'
import image6 from '../patientComponentsAssets/image6.jpg'
const PatientFeatures = () => {
  return (
    <div className="body">
        <div className='features_cards'>
            <div className="all_cards">
                <div className="card">
                    <img src={consultant} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={image2} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={image3} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={image4} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={image5} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={image6} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
            </div>
        </div>

    </div>
  
  )
}


export default PatientFeatures