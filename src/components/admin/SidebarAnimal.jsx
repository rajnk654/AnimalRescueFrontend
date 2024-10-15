import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard';
import axios from 'axios';

const SidebarAnimal = () => {
    const [animals, setAnimals] = useState([]);
    const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${url}/animal`, {
          headers: {
            Authorization: token
       },
    })
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.data;
        setAnimals(data); // Assuming data is an array
      } catch (error) {
        console.log("Error fetching animals:", error);
      }
    };

    fetchData();
  }, [url]);

  console.log(animals);

  return (
    <>
    
    <div className="container md-3 vh-100">
      <div className="row mb-4">
        {animals.length > 0 ? (
          animals.map(({ animalType, adoptable }, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                {/* Display image with fallback if the primary image fails */}
                  <img
                    src="/Dog.jpg"  // Default image
                    onError={(e) => e.target.src = "/fallback.jpg"}  // Fallback image
                    alt="Animal"
                    className="img-fluid rounded-start"
                  />
                <div className="card-body">
                  <h5 className="card-title text-center">Animal Details</h5>
                  <h6 className="card-title text-center">Price: ₹500</h6>
                  <h6 className="card-title text-center">Animal Type: {animalType}</h6>
                  <h6 className="card-title text-center">Adoptable: {adoptable ? "Yes" : "No"}</h6>
                  <div className="d-grid mx-auto">
                  {/* <button type="button" class="btn btn-warning" 
                    >Back</button><br/> */}
                    <button type="button" className="btn btn-primary">Action</button>

                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No animals available for adoption at the moment.</p>
        )}
      </div>
      {/* <AnimalModal/> */}
    </div>
    
    </>
  );
};

  
export default SidebarAnimal
