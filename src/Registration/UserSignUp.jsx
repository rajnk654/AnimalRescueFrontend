import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "../Firebase";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      await uploadProfilePicture(file); // Call the function to upload the file
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProfilePicture = async (file) => {
    if (!file) return;

    const storageRef = ref(storage, ` profile_pics/${file.name}`);
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File available at", downloadURL);
      setProfilePic(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      profilePic,
    };
    console.log(userData);

    // Password validation regex
    const passwordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    // Check password validity
    // if (!passwordRegex.test(password)) {
    //   setResponseMessage("Password must be at least 8 characters, include uppercase, lowercase, digit, and special character.");
    //   return;
    // }

    // Check if passwords match
    // if (password !== confirmpassword) {
    //   setResponseMessage("Passwords do not match.");
    //   return;
    // }

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response) {
        console.log(response);
        // const data = await response.json();
        // const token = response.config.headers.Authorization;
        // localStorage.setItem("token", token);
        // axios.defaults.headers.common["Authorization"] = token;
        // console.log(token);
      } else {
        alert("error in registration: ");
      }
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage('Error occurred while creating user');
    }
  };

  return (
    <>
      <body>
        <div
          className="user-container"
          style={{ backgroundImage: "url(bg3.jpg)" }}
        >
          <h1 className="text-center mt-3">Register</h1>

          <div
            className="container  py-md-2 mt-md-3"
            style={{
              width: "45%",
              borderRadius: "8px",
              padding: "16px",
              // Optional: Set a max width to ensure the container doesn't stretch too wide on large screens
            }}
          >
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control mt-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter fname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter lastname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">PhoneNumber</label>
                <input
                  type="tel"
                  id="phone"
                  name="exampleInputEmail1"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control"
                  placeholder="Phone Number"
                />

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=" conform Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Profile Picture</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Upload File"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary mt-2"
              >
                Submit
              </button>
              <br />
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Signup;
