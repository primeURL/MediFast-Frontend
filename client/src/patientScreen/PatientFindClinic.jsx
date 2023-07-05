import React, { useState } from 'react';
import '../patientStyles/patientFindClinic.css'

const PatientFindClinic = () => {
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate API call to fetch search results based on location
    const dummySearchResults = [
      {
        name: 'ABC Clinic',
        address: '123 Main St, City, State',
        phone: '123-456-7890',
      },
      {
        name: 'XYZ Hospital',
        address: '456 Oak St, City, State',
        phone: '987-654-3210',
      },
      // Add more dummy search results as needed
    ];
    setSearchResults(dummySearchResults);
  };

  const locations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
    // Add more locations as needed
  ];

  return (
    <div className="find-clinic-container">
    <h2 className="find-clinic-title">Find Clinic</h2>
    <form className="search-form" onSubmit={handleSearch}>
      <label className="location-label">
        Location:
        <select className="location-select" value={location} onChange={(e) => setLocation(e.target.value)}>
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
              <h4 className="result-name">{result.name}</h4>
              <p className="result-address">{result.address}</p>
              <p className="result-phone">{result.phone}</p>
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
