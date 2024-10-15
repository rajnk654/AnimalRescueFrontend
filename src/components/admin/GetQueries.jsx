import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetQueries.css'; // Custom CSS for styling the page
import { FaReply, FaTrashAlt } from 'react-icons/fa'; // Icons for respond and delete

const GetQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/api/v1/contact/all", {
          headers: {
            Authorization: token,
          },
        });
        setQueries(response.data || []);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Failed to fetch queries.");
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/v1/contact/${id}`, {
        headers: { Authorization: token },
      });
      alert("Successfully deleted");
      setQueries((prevQueries) => prevQueries.filter((query) => query.id !== id));
    } catch (error) {
      console.error("Error deleting query:", error);
    }
  };

  const handleResponse = (id) => {
    console.log(`Respond to query with ID: ${id}`);
    alert(`Respond to query with ID: ${id}`);
  };

  return (
    <div className="queries-container vh-100">
      <h2>Customer Queries</h2>

      {loading && <p>Loading queries...</p>}
      {error && <p className="error">{error}</p>}

      {queries.length > 0 ? (
        <table className="queries-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query, index) => (
              <tr key={index} className="query-row">
                <td>{query.id}</td>
                <td>{query.fullName}</td>
                <td>{query.email}</td>
                <td>{query.phoneNumber}</td>
                <td>{query.message}</td>
                <td className="action-buttons">
                  <button className="action-btn respond-btn" onClick={() => handleResponse(query.id)}>
                    <FaReply /> Respond
                  </button>
                  <button className="action-btn delete-btn" onClick={() => handleDelete(query.id)}>
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>No queries available.</p>
      )}
    </div>
  );
};

export default GetQueries;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './GetQueries.css'; // Custom CSS for styling the page
// import { FaReply, FaTrashAlt } from 'react-icons/fa'; // Icons for respond and delete
// import {format, parse} from 'date-fns';

// const GetQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:8080/api/v1/contact/all", {
//           headers: {
//             Authorization: token,
//           },
//         });
//         setQueries(response.data || []);
//       } catch (err) {
//         setError(err.response ? err.response.data.message : "Failed to fetch queries.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQueries();
//   }, []);
//   const formatDate = (dateString) => {
//     try {
//       // Parse the date string received from the backend in 'dd/MM/yyyy, HH:mm:ss' format
//       const parsedDate = parse(dateString, 'dd/MM/yyyy, HH:mm:ss', new Date());
//       return format(parsedDate, 'dd/MM/yyyy, HH:mm:ss');
//     } catch (error) {
//       console.error("Error parsing date:", error);
//       return 'Invalid Date';
//     }
//   };
//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:8080/api/v1/contact/${id}`, {
//         headers: { Authorization: token },
//       });
//       alert("Successfully deleted");
//       setQueries((prevQueries) => prevQueries.filter((query) => query.id !== id));
//     } catch (error) {
//       console.error("Error deleting query:", error);
//     }
//   };

//   const handleResponse = (id) => {
//     console.log(`Respond to query with ID: ${id}`);
//     alert(`Respond to query with ID:${id}`);
//   };

//   return (
//     <div className="queries-container vh-100">
//       <h2>Customer Queries</h2>

//       {loading && <p>Loading queries...</p>}
//       {error && <p className="error">{error}</p>}

//       {queries.length > 0 ? (
//         <table className="queries-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Subject</th>
//               <th>Query</th>
//               <th>Submitted On</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {queries.map((query, index) => (
//               <tr key={index} className="query-row">
//                 <td>{query.id}</td>
//                 <td>{query.name}</td>
//                 <td>{query.emailId}</td>
//                 <td>{query.subject}</td>
//                 <td>{query.comment}</td>
//                 <td>{formatDate(query.sentAt).toLocaleString()}</td>
//                 <td className="action-buttons">
//                   <button className="action-btn respond-btn" onClick={() => handleResponse(query.id)}>
//                     <FaReply /> Respond
//                   </button>
//                   <button className="action-btn delete-btn" onClick={() => handleDelete(query.id)}>
//                     <FaTrashAlt /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         !loading && !error && <p>No queries available.</p>
//       )}
//     </div>
//   );
// };

// export default GetQueries;