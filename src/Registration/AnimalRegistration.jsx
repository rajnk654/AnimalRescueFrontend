import axios from 'axios';
import React, { useState } from 'react';

const AnimalRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        status: '',
        rescueDate: '',
        photos: null,
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photos: e.target.files[0] });
    };
    const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${url}/animal/rescuer-Id/1/fosterCare-Id/2`,formData, {
                headers: {
                  Authorization: token
                  // "Content-Type": "application/json",
                },
              });
              if (Response) {
                console.log(response.data)
              }
        } catch (error) {
         console.log(error);   
        }
        // Submit the form data to the server or any backend service
        console.log(formData);
    };

    return (
        <>
            <div className="container">
                <div className="container mt-5 ">
                    <h1 className="text-center">Animal Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Animal Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="form-control"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="status">Adoption Status</label>
                            <select
                                className="form-control"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="rescued">Rescued</option>
                                <option value="adopted">Adopted</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="rescueDate">Rescue Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="rescueDate"
                                name="rescueDate"
                                value={formData.rescueDate}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="photos">Upload Photos</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photos"
                                name="photos"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Register Animal
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AnimalRegistrationForm;

