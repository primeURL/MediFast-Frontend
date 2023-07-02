import React from 'react'
import dashboard from '../commonComponentsAssets/dashboard.jpg'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className='common-main'>
        <img src={dashboard} className='background-image'></img>
        <div className="common-overlay-button">
            <button>Patient Login</button>
            <button>Doctor Login</button>

        </div>
    </div>
  )
}

export default Dashboard