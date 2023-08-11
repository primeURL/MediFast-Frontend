import React, { useState, useEffect } from 'react';
import '../patientStyles/patientFindClinic.css'
import axios from 'axios'
import env from '../env.json'

const PatientFindClinic = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState('');
  const [locationArray, setLocationArray] = useState([]);

  const [clinic, setClinic] = useState([])
  const handleSearch = (e) => {
    e.preventDefault();
    const matchedObj = clinic.filter(obj => obj.country.toLowerCase() === location.toLowerCase())
    setSearchResults(matchedObj);
    
  };
  let locations = [
  ];
  useEffect(()=>{
    async function getAllClinic(){
      const res = await axios.get(`${env.backend_url_getPatientInfo}/allClinic`)
      setClinic(res.data)
      res.data.forEach((item)=>{
        if(!locations.includes(item.country)){
          locations.push(item.country)
        }
      })
      setLocationArray(locations)
      console.log('location',locations);
    }
    getAllClinic()
  }, [])
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  return (
    <div className="find-clinic-container">
    <h2 className="find-clinic-title">Find Clinic</h2>
    <form className="search-form" onSubmit={handleSearch}>
      <label className="location-label">
        Location:
        <select className="location-select" value={location} onChange={(e) => handleLocationChange(e)}>
          <option value="">Select a location</option>
          {locationArray.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="search-btn">Search</button>
    </form>

    {searchResults.length > 0 ? (
      <div>
        <h3 className="results-heading">Search Results:</h3>
        <ul className="results-list">
          {searchResults.map((result, index) => (
            <li key={index} className="result-item">
              <h4 className="result-name">{result.clinicName}</h4>
              <p className="result-address">{result.clinicLocation}</p>
              <p className="result-phone">{result.clinicPhone}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="no-results">No results found.</p>
    )}
  </div>
  );
};

export default PatientFindClinic;
