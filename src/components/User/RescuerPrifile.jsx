import React,{ useEffect, useState } from 'react'
import './Profile.css'; // Import your CSS for styling
import Layout from '../layout/Layout';

const RescuerPrifile = () => {
    const [user, setUser] = useState(null); // Initially null to handle loading state
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    profilePic: 'https://via.placeholder.com/150',
  });

  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/v1/user/profile'); // Replace with your actual API endpoint
        const data = await response.json();
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          bio: data.bio,
          profilePic: data.profilePic,
        });
        setLoading(false); // Stop loading once the data is fetched
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(user); // Reset form data on cancel
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated user data to the server
      const response = await fetch('http://localhost:5001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUser(formData); // Update the user state with new data
        setIsEditing(false);
      } else {
        console.error('Error updating user profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>; // Show loading state while fetching data
  }
  return (
    <Layout>
      <div className="profile-page-container py-md-3 mt-md-3">
        <div className="profile-card">
          <div className="profile-header">
            <h2>{isEditing ? 'Edit Profile' : 'Profile Overview'}</h2>
          </div>
          <div className="profile-content">
            <div className="profile-pic">
              <img src={user ? user.profilePic : 'https://via.placeholder.com/150'} alt="Profile" />
            </div>
            {!isEditing ? (
              <div className="profile-details">
                <h3>{user ? user.name : "user"}</h3>
                <p className="profile-email"><strong>Email:</strong> {user ? user.email : "user@gmail.com"}</p>
                <p className="profile-bio"><strong>Bio:</strong> {user ? user.bio : "bio data"}</p>
                <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
              </div>
            ) : (
              <form className="edit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio:</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="profile-save-btn">Save</button>
                  <button type="button" className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
  

export default RescuerPrifile

