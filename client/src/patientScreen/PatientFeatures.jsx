import React from 'react'
import '../patientStyles/patientFeatures.css'
import consultant from '../patientComponentsAssets/consultant.jpg'
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
                    <img src={consultant} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={consultant} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={consultant} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={consultant} alt="" />
                    <div className="offer">
                        <h6>40% off</h6>
                    </div>
                    <h3>Get your consultant TODAY</h3>
                </div>
                <div className="card">
                    <img src={consultant} alt="" />
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