import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/auth";

const FosterCareAnimalsPage = () => {
  const [auth] = useAuth();
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for new animal details
  const [newAnimal, setNewAnimal] = useState({
    animalType: '',
    gender: '',
    rescueDate: '',
    status: ''
  });

  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  const location = useLocation();

  // Extract rescuerId and fosterCareId from location.state
  const rescuerId = 53; // Ensure this key matches the structure you pass from the previous component
  const fosterCareId = location.state?.id; // Ensure this key matches the structure you pass from the previous component

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/v1/fosterCare/${fosterCareId}/animals`,
          {
            headers: {
              Authorization: auth?.token,
            },
          }
        );
        console.log(response.data);
        if (response.status === 200 && response.data) {
          setAnimals(response.data);
          setError("");
        } else {
          setError("No animals found in this foster care.");
          setAnimals([]);
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetch animals from foster care.");
        setAnimals([]);
      } finally {
        setLoading(false);
      }
    };
    // if (rescuerId && fosterCareId) { // Fetch animals only if ids are available
      fetchAnimals();
    // }
  }, [auth, rescuerId, fosterCareId]); // Added rescuerId and fosterCareId to dependency array

  // Function to handle adding a new animal
  const handleAddAnimal = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/animal/rescuer-Id/${rescuerId}/fosterCare-Id/${fosterCareId}`, // Use fosterCareId here
        newAnimal,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (response.status === 200) {
        setAnimals((prev) => [...prev, response.data]); // Add new animal to the list
        setShowModal(false); // Close the modal
        setNewAnimal({ animalType: '', gender: '', rescueDate: '', status: '' }); // Reset the form
      }
    } catch (error) {
      console.error("Error adding animal:", error);
      setError("Failed to add the animal.");
    }
  };

  // Function to delete an animal
  const deleteAnimal = async (animalId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/fosterCare/${fosterCareId}/animals/${animalId}`, // Use fosterCareId here
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (response.status === 204) { // No content on successful delete
        setAnimals((prev) => prev.filter((animal) => animal.id !== animalId)); // Remove deleted animal from state
      }
    } catch (error) {
      console.error("Error deleting animal:", error);
      setError("Failed to delete the animal.");
    }
  };

  if (loading) {
    return <p>Loading animals...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container py-md-2 mt-md-5 vh-100">
      <h2>Animals in Foster Care</h2>
      <div className="d-flex justify-content-end ">
        <button className="btn btn-primary btn-sm w-25" onClick={() => setShowModal(true)}>
          Add
        </button>
      </div>

      {/* Modal for adding a new animal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Animal</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => handleAddAnimal(e)}>
                  <div className="mb-3">
                    <label htmlFor="animalType" className="form-label">Animal Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="animalType"
                      value={newAnimal.animalType}
                      onChange={(e) => setNewAnimal({ ...newAnimal, animalType: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      value={newAnimal.gender}
                      onChange={(e) => setNewAnimal({ ...newAnimal, gender: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rescueDate" className="form-label">Rescue Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="rescueDate"
                      value={newAnimal.rescueDate}
                      onChange={(e) => setNewAnimal({ ...newAnimal, rescueDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      value={newAnimal.status}
                      onChange={(e) => setNewAnimal({ ...newAnimal, status: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Add Animal</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Rescue Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.animalType}</td>
              <td>{animal.gender}</td>
              <td>{animal.rescueDate}</td>
              <td>{animal.status}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteAnimal(animal.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FosterCareAnimalsPage;












// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../Context/auth";

// const FosterCareAnimalsPage = () => {
//   const [auth] = useAuth();
//   const [animals, setAnimals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const location = useLocation();

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:8080/api/v1/fosterCare/${location.state?.id}/animals`,
//           {
//             headers: {
//               Authorization: auth?.token,
//             },
//           }
//         );
//         console.log(response.data);
//         // Check if API call is successful and data exists
//         if (response.status === 200 && response.data) {
//           setAnimals(response.data); // Update the animal state
//           setError(""); // Clear any previous errors
//         } else {
//           setError("No animals found in this foster care.");
//           setAnimals([]); // Clear previous animal data
//         }
//       } catch (err) {
//         console.log(err);
//         setError("Failed to fetch animals from foster care.");
//         setAnimals([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAnimals();
//   }, [auth, location.state?.id]); // Added dependencies to the useEffect

//   if (loading) {
//     return <p>Loading animals...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="container py-md-2 mt-md-5 vh-100">
//       <h2>Animals in Foster Care</h2>
//       <div className="d-flex justify-content-end ">
//         <button className="btn btn-primary btn-sm w-25">Add</button>
//       </div>
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Rescue Date</th>
//             <th>Status</th>
//             <th>Actions</th> {/* Added header for Actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {animals.map((animal) => (
//             <tr key={animal.id}>
//               <td>{animal.animalType}</td>
//               <td>{animal.gender}</td>
//               <td>{animal.rescueDate}</td>
//               <td>{animal.status}</td>
//               <td>
//                 {/* Delete button */}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => deleteAnimal(animal.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FosterCareAnimalsPage;
