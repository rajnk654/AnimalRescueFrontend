import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdopterDetails = ({ adopterId }) => {
  const [adopter, setAdopter] = useState(null);
  const [error, setError] = useState("");
 
  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL; 


  useEffect(() => {
    const fetchAdopterDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${url}/animal`, {
          headers: {
            Authorization: token  // Correct format for setting Authorization header
          }
        });
        setAdopter(response.data.data);  // Assuming response structure contains data under response.data.data
      } catch (error) {
        setError("Failed to fetch adopter details.");
      }
    };

    if (adopterId) {
      fetchAdopterDetails();  // Only fetch details if adopterId is provided
    }
  }, [adopterId]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="adopter-details container">
      {adopter ? (
        <div className="card mt-4">
          <div className="card-header">
            <h3>Adopter Details</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p><strong>Name:</strong> {adopter.userDto.name}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Email:</strong> {adopter.userDto.email}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Phone:</strong> {adopter.userDto.phone}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Address:</strong> {adopter.userDto.address}</p>
              </div>
              <div className="col-md-12">
                <p><strong>Adoption Status:</strong> {adopter.adoptionStatus}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdopterDetails;
