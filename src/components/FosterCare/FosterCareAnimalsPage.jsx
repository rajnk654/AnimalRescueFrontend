import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const FosterCareAnimalsPage = () => {
     
    const [auth] = useAuth();
  const [animals, setAnimals] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchAnimals = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://localhost:8080/api/v1/fosterCare/${location.state?.id}/animals`,
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
      fetchAnimals();
  }, []);

  if (loading) {
    return <p>Loading animals...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container py-md-2 mt-md-5 vh-100">
      <h2>Animals in Foster Care</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Rescue Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.animalType}</td>
              <td>{animal.gender}</td>
              <td>{animal.rescueDate}</td>
              <td>{animal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FosterCareAnimalsPage;
