// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const DisplayAnimalInFostercare = () => {
//     const { fosterCareId } = useParams(); // Get fosterCareId from URL
//     const [animals, setAnimals] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchAnimals = async () => {
//             try {
//                 // Fetching animal data from API using the fosterCareId
//                 const response = await axios.get(`/api/fostercare/${fosterCareId}/animals`);
//                 setAnimals(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch animals.');
//                 setLoading(false);
//             }
//         };

//         fetchAnimals();
//     }, [fosterCareId]); // Re-run effect when fosterCareId changes

//     if (loading) return <p>Loading animals...</p>;
//     if (error) return <p>{error}</p>;

//     // Rendering animals without using map
//     const animalCards = [];
//     animals.forEach((animal) => {
//         animalCards.push(
//             <div className="col-md-4 mb-4" key={animal.id}>
//                 <div className="card h-100">
//                     <img
//                         src={animal.imageUrl || 'https://via.placeholder.com/150'}
//                         className="card-img-top"
//                         alt={animal.name}
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">{animal.name}</h5>
//                         <p className="card-text">
//                             Species: {animal.species} <br />
//                             Breed: {animal.breed}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         );
//     });


//     return (

//         <div className="container mt-4">
//             <h2>Animals in Foster Care (ID: {fosterCareId})</h2>
//             <div className="row">
//                 {animals.length > 0 ? animalCards : <p>No animals available in this foster care.</p>}
//             </div>

//             {/* Outlet for rendering nested routes */}
//             <Outlet />
//         </div>
//     );
// };

// export default DisplayAnimalInFostercare
