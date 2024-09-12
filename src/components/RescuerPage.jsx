import React, { useEffect, useState } from 'react';
import './Rescuer.css';

const RescuerPage = () => {
  const [rescuers, setRescuers] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [filteredRescuers, setFilteredRescuers] = useState([]);
  const [loading, setLoading] = useState(true); 

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/Rescuer`);
        const data = await response.json();
        setRescuers(data);
        setLoading(false); 
      } catch (error) {
        console.log("Error fetching rescuers:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    
    if (cityFilter) {
      const filtered = rescuers.filter((rescuer) => 
        rescuer.city.toLowerCase().includes(cityFilter.toLowerCase())
      );
      setFilteredRescuers(filtered);
    } else {
      setFilteredRescuers([]); 
    }
  }, [cityFilter, rescuers]);

  return (
    <div className="container vh-100 mt-md-5 py-md-3">
      <div className="row mb-5">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by City"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        {loading ? (
          <h2>Loading rescuers...</h2>
        ) : !cityFilter ? (
          <h2>No  rescuers Found</h2>
        ) : filteredRescuers.length < 1 ? (
          <h2>No rescuers found</h2>
        ) : (
          filteredRescuers.map((rescuer) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default RescuerPage;
