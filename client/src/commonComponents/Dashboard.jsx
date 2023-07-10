import React from 'react'
import dashboard from '../commonComponentsAssets/dashboard.jpg'
import './dashboard.css'
import { Link,useNavigate} from "react-router-dom";
const Dashboard = () => {
  return (
    <div className='common-main'>
        <img src={dashboard} className='background-image'></img>
        <div className="adminBtn">
          <button><Link to='/adminHome'>Admin Login</Link></button> 

        </div>
        <div className="common-overlay-button">
            <button><Link to='/patientHome'>Are You Patient? Click Here</Link></button>
            <button><Link to='/doctorHome'>Are You Doctor? Click Here</Link></button>
        </div>
    </div>
  )
}

export default Dashboard