import React from 'react'
import dashboard from '../commonComponentsAssets/dashboard.jpg'
import './dashboard.css'
import { Link,useNavigate} from "react-router-dom";
const Dashboard = () => {
  return (
    <div className='common-main'>
        <img src={dashboard} className='background-image'></img>
        <div className="common-overlay-button">
            <button><Link to='/patientLogin'>Patient Login</Link></button>
            <button><Link to='/doctorLogin'>Doctor Login</Link></button>

        </div>
    </div>
  )
}

export default Dashboard