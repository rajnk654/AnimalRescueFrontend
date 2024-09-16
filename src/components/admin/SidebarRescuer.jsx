import React, { useEffect, useState } from 'react'
import Sidebar from '../SideBar';
import Dashboard from '../Dashboard';
import axios from 'axios';

const SidebarRescuer = () => {
  const [rescuers, setRescuers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

  console.log(rescuers.length)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${url}/Rescuer`, {
          headers: {
            Authorization: token
          }
        })
        const data = await response.data;
        console.log(data)
        setRescuers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
        <h1>Hi</h1>
        <div className="container mt-4 vh-100">
          <div className="row">
            {loading ? (
              <h2>Loading rescuers...</h2>
            ) : rescuers.length > 0 ? (
              <h2>No rescuers found</h2>
            ) : (
              rescuers.length > 0 && rescuers.map((rescuer) => (
                <div key={rescuer.id} className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="Laxmi.jpg" alt="Rescuer" className="img-fluid " />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title text-center">Rescuer Details</h3>
                        <h4 className="card-title text-center">Name: {rescuer.userDto?.firstName}</h4>
                        <h4 className="card-title text-center">City: {rescuer.city}</h4>
                        <h4 className="card-title text-center">Price: {rescuer.price}</h4>
                        <h4 className="card-title text-center">Rating: {rescuer.rating || 5}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
    </>
  );
};

export default SidebarRescuer
