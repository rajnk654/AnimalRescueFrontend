import React, { useEffect, useState } from 'react';

const AdoptAnimal = () => {
  const [animals, setAnimals] = useState([]);

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/animal`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnimals(data); // Assuming data is an array
      } catch (error) {
        console.log("Error fetching animals:", error);
      }
    };

    fetchData();
  }, [url]);

  console.log(animals);

  return (
    <div className="container mt-3">
      <div className="row mb-3">
        {animals.length > 0 ? (
          animals.map(({ animalType, adoptable }, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src="Dog.jpg" className="card-img-top" alt="Animal" />
                <div className="card-body">
                  <h5 className="card-title text-center">Animal Details</h5>
                  <h6 className="card-title text-center">Price: $50</h6>
                  <h6 className="card-title text-center">Animal Type: {animalType}</h6>
                  <h6 className="card-title text-center">Adoptable: {adoptable ? "Yes" : "No"}</h6>
                  <div className="d-grid mx-auto">
                    <button type="button" className="btn btn-primary">Request For Adopt</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No animals available for adoption at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AdoptAnimal;
