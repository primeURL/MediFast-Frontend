import React, { useState, useEffect } from 'react';
import '../patientStyles/patientFindClinic.css'
import axios from 'axios'
import env from '../env.json'

const PatientFindClinic = () => {
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [clinic, setClinic] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate API call to fetch search results based on location

    const matchedObj = clinic.filter(obj => obj.country === location)
    setSearchResults(matchedObj);
    
  };
  useEffect(()=>{
    async function getAllClinic(){
      const res = await axios.get(`${env.backend_url_getPatientInfo}/allClinic`)
      setClinic(res.data)
    }
    getAllClinic()
  }, [])
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
    
  }
  const locations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
    'India'
    // Add more locations as needed
  ];

  return (
    <div className="find-clinic-container">
    <h2 className="find-clinic-title">Find Clinic</h2>
    <form className="search-form" onSubmit={handleSearch}>
      <label className="location-label">
        Location:
        <select className="location-select" value={location} onChange={(e) => handleLocationChange(e)}>
          <option value="">Select a location</option>
          {locations.map((loc, index) => (
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
