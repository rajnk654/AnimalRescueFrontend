import React, { useEffect, useState } from 'react'
import person1 from '../assets/person1.jpg'
import axios from 'axios';

const FosterCarePage = () => {
    const [fosterCares, setFosterCares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${url}/fosterCare`, {
              headers: {
                Authorization: token
              },
            });
            setFosterCares(response.data); // Set the foster care data
            setLoading(false); // Data fetching is complete
          } catch (error) {
            setError(error.message); // If there's an error, set it in the state
            setLoading(false);
          }
        };
    
        fetchData();
      }, [url]);
    
      if (loading) {
        return <p>Loading foster care data...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
  
    return (
      <div className="container">
        <div className="row">
          {fosterCares.map((fosterCare) => (
            <div className="col-md-4" key={fosterCare.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{fosterCare.fosterCareName}</h5>
                  <p className="card-text"><strong>Phone Number:</strong> {fosterCare.phoneNumber}</p>
                  <p className="card-text"><strong>Location:</strong> {fosterCare.location}</p>
                  <p className="card-text"><strong>City:</strong> {fosterCare.city}</p>
                  <p className="card-text"><strong>State:</strong> {fosterCare.state}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FosterCarePage;