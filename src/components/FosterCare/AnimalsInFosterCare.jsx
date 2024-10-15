import React, {  useState } from "react";
import axios from "axios";
import FosterCareDashboard from "./FosterCareDashboard";
import { useAuth } from "../../Context/auth";

const AnimalsInFosterCare = ({ fosterCareId, fosterCareName }) => {

  const [auth] = useAuth();
    const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAnimals, setShowAnimals] = useState(false); // State to toggle display of animals

  console.log(fosterCareId);
  // Function to fetch animals from the foster care
  const fetchAnimals = async () => {
    //console.log("hii");
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/v1/fosterCare/${fosterCareId}/animals`,
        {
          headers: {
            "Authorization": auth?.token
          },
        }
      );
      console.log(response.data);
      // Check if API call is successful and data exists
      if (response.status === 200 && response.data) {
        setAnimals(response.data); // Update the animal state
        setError(""); // Clear any previous errors
      } else {
        setError("No animals found in this foster care.");
        setAnimals([]); // Clear previous animal data
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch animals from foster care.");
      setAnimals([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle the click event to toggle animal display
  const handleFosterCareClick = () => {
    fetchAnimals();
    if (!showAnimals) {
      // If animals are not displayed, fetch them
    }
    setShowAnimals(!showAnimals); // Toggle showAnimals state
  };

  return (
    <div>
      {/* Foster Care Name and toggle */}
      <h3 onClick={handleFosterCareClick} style={{ cursor: "pointer", color: "blue" }}>
        {fosterCareName} {showAnimals ? "▲" : "▼"}
      </h3>

      {/* Display animals if showAnimals is true */}
      {showAnimals && (
        <div>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {!loading && animals.length > 0 && (
            <ul>
              {animals.map((animal) => (
                <li key={animal.id}>
                  <strong>Name:</strong> {animal.animalType} <br />
                  <strong>Gender:</strong> {animal.gender} <br />
                  <strong>RescueDate:</strong> {animal.rescueDate} <br />
                  {/* <strong>Adoptable:</strong> {animal.true} <br /> */}
                  <strong> Status:</strong> {animal.status} <br />
                  <hr />
                </li>
              ))}
            </ul>
          )}
          {!loading && animals.length === 0 && !error && <p>No animals found in this foster care.</p>}
        </div>
      )}
    </div>
  );
};

export default AnimalsInFosterCare;