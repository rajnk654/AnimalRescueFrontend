import React, { useEffect, useState } from "react";
import axios from "axios";
import FosterCareDashboard from "./FosterCareDashboard";

const AnimalsInFosterCare = ({ fosterCareId }) => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState("");
  

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL; // API base URL
  console.log(fosterCareId);

  const id = fosterCareId || 0;

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const response = await axios.get(`${url}/fosterCare/${1}/animals`, {
          headers: {
            Authorization: token,
          },
        });
        
        setAnimals(response.data); // Assuming 'data' contains the animal list
      } catch (error) {
        setError("Failed to fetch animals from foster care.");
      }
    };

    fetchAnimals();
  }, [fosterCareId]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <FosterCareDashboard>
    <div className="container mt-4 vh-100">
      <h2>Animals in Foster Care</h2>
      {animals.length > 0 ? (
        <div className="row">
          {/* Iterating over animals without map */}
          {(() => {
            const animalsList = [];
            for (let i = 0; i < animals.length; i++) {
              const animal = animals[i];
              console.log(animal)
              animalsList.push(
                <div key={animal.id} className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-body">
                        
                      <h5 className="card-title">{animal.animalType}</h5>
                      <p className="card-text">Gender: {animal.gender}</p>
                      <p className="card-text"> Adoptable: {animal.adoptable ? "Yes" : "No"}</p>
                      <p className="card-text"> Status:{animal.status}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return animalsList;
          })()}
        </div>
      ) : (
        <p>No animals found in this foster care.</p>
      )}
    </div>
    </FosterCareDashboard>
  );
};

export default AnimalsInFosterCare;
