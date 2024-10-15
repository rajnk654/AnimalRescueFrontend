import React, { useEffect, useState } from 'react';
//import AnimalModal from './AnimalModal'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AnimalAdoption from './Payment/AnimalAdoption';

const AdoptAnimal = () => {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${url}/animal`, {
          headers: {
            Authorization: token
          }
        })
        
        const data = response.data;
        setAnimals(data); // Assuming data is an array
      } catch (error) {
        console.log("Error fetching animals:", error);
      }
    };

    fetchData();
  }, [url]);

  console.log(animals);

  const handleMoreDetailsClick = (id, animalType, adoptable ) => {
    const data = {id, animalType, adoptable }
    navigate(`/AnimalModal`, {state : data});
  };

  

  return (
    <div className="container py-md-5 mt-md-3">
      <div className="row mb-4">
        {animals.length > 0 ? (
          animals.map(({id, animalType, adoptable }, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src="Dog.jpg" className="card-img-top" alt="Animal" />
                <div className="card-body">
                  <h5 className="card-title text-center">Animal Details</h5>
                  <h6 className="card-title text-center">Price: ₹500</h6>
                  <h6 className="card-title text-center">Animal Type: {animalType}</h6>
                  <h6 className="card-title text-center">Adoptable: {adoptable ? "Yes" : "No"}</h6>
                  <div className="d-grid mx-auto">
                    <button type="button" class="btn btn-warning" onClick={() => handleMoreDetailsClick(id, animalType, adoptable )}
                    >More Details</button><br />
                    <AnimalAdoption animalId={id}/>

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

  );
};

export default AdoptAnimal;
