import React, { useEffect, useState } from 'react';
import './Rescuer.css';

const RescuerPage = () => {
  const [rescuers, setRescuers] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [filteredRescuers, setFilteredRescuers] = useState([]);
  const [stateFilter, setStateFilter] = useState('');
  const [zipcodeFilter, setZipcodeFilter] = useState('');

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/Rescuer`);
        const data = await response.json();
        setRescuers(data);  // Set the fetched rescuers
        setFilteredRescuers(data); // Default to showing all rescuers
      } catch (error) {
        console.log("Error fetching rescuers:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filtering logic for city, state, and zipcode
    if (cityFilter || stateFilter || zipcodeFilter) {
      const filtered = rescuers.filter((rescuer) => {
        const matchesCity = cityFilter ? rescuer.city.toLowerCase() === cityFilter.toLowerCase() : true;
        const matchesState = stateFilter ? rescuer.state.toLowerCase() === stateFilter.toLowerCase() : true;
        const matchesZipcode = zipcodeFilter ? rescuer.zipcode === zipcodeFilter : true;
        return matchesCity && matchesState && matchesZipcode;
      });
      setFilteredRescuers(filtered);
    } else {
      setFilteredRescuers(rescuers); // Reset to all rescuers if no filter is applied
    }
  }, [cityFilter, stateFilter, zipcodeFilter, rescuers]);

  return (
    <div className="container mt-4">
      {/* Filter Inputs */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by City"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)} // Update city filter state
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by State"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)} // Update state filter state
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Zipcode"
            value={zipcodeFilter}
            onChange={(e) => setZipcodeFilter(e.target.value)} // Update zipcode filter state
          />
        </div>
      </div>

      {/* Rescuer Cards */}
      <div className="row">
        {filteredRescuers.map((rescuer) => (
          <div key={rescuer.id} className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="pavan.jpg" alt="Rescuer" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title text-center">Rescuer Details</h3>
                  <h4 className="card-title text-center">Name: {rescuer.userDto?.firstName}</h4>
                  <h4 className="card-title text-center">City: {rescuer.city}</h4>
                  <h4 className="card-title text-center">Price: {rescuer.price}</h4>
                  <h4 className="card-title text-center">Rating: {rescuer.rating || 5}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RescuerPage;
