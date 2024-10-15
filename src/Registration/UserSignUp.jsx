import React, { useRef, useState } from "react";
import "./SignUp.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
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

    const storageRef = ref(storage, `profile_pics/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfilePic(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const validate = () => {
    const errors = {};

    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        profilePic,
      };
      console.log(userData);

      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/user/signUp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (response.ok) {
          console.log("User registered successfully");
        } else {
          console.error("Error in registration");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  const emailVerify = async () => {
    if (password !== confirmPassword) {
      toast.warning("Please confirm your password");
    } else {
      try {
        const response = await axios
          .post("http://localhost:8080/api/v1/validator", {
            value: email,
          })
          .catch((err) =>{
            toast.warning("Internal server error while generating otp")
            console.log(err);
          }
          );
        toast.success(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const verifyOtp = async () => {
    try {
      const response = await axios
        .post("http://localhost:8080/api/v1/validator/verify", {
          value: email,
          otp: otp,
        })
        .catch(() => toast.warning("Invalid otp enter valid otp"));
      if (response.status === 200) {
        setOtp("");
        toast.success(response?.data, {
          position: "top-right",
          autoClose: 1000,
        });
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          const userData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            profilePic,
          };
          console.log(userData);
    
            const response = await fetch(
              "http://localhost:8080/api/v1/user/signUp",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              }
            );
    
            if (response.ok) {
              console.log("User registered successfully");
              toast.success("User registered successfully");
              navigate("/signin");
              window.location.reload();
            } else {
              console.error("Error in registration");
            }
      }
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div
        className="user-container"
        style={{ backgroundImage: "url(bg3.jpg)" }}
      >
        <h1 className="text-center mt-3">Register</h1>
        <div
          className="container py-md-2 mt-md-3"
          style={{
            width: "45%",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <form onSubmit={() => emailVerify()}>
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                id="phoneNumber"
                placeholder="Enter phone number"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            {/* Profile Picture */}
            <div className="form-group">
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-control"
                id="profilePic"
                placeholder="Upload file"
              />
            </div>

            <button type="button" onClick={() => emailVerify()}
            className="btn btn-primary mt-2"
            data-bs-toggle="modal"
                    data-bs-target="#myModal">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Verify your Email
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Before completing the registration process please enter the otp
                which has been sent your <b> '{email}'</b>
              </p>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => verifyOtp()}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import React from "react";
// import { useState } from "react";
// import "./SignUp.css";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import axios from "axios";
// import { storage } from "../Firebase";

// const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profilePic, setProfilePic] = useState("");

//   const handleFileChange = async (e) => {
//     try {
//       const file = e.target.files[0];
//       await uploadProfilePicture(file); // Call the function to upload the file
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const uploadProfilePicture = async (file) => {
//     if (!file) return;

//     const storageRef = ref(storage, ` profile_pics/${file.name}`);
//     try {
//       // Upload the file to Firebase Storage
//       await uploadBytes(storageRef, file);
//       // Get the download URL
//       const downloadURL = await getDownloadURL(storageRef);
//       console.log("File available at", downloadURL);
//       setProfilePic(downloadURL);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const userData = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       password,
//       profilePic,
//     };
//     console.log(userData);

//     // Password validation regex
//     const passwordRegex =
//       /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

//     // Check password validity
//     // if (!passwordRegex.test(password)) {
//     //   setResponseMessage("Password must be at least 8 characters, include uppercase, lowercase, digit, and special character.");
//     //   return;
//     // }

//     // Check if passwords match
//     // if (password !== confirmpassword) {
//     //   setResponseMessage("Passwords do not match.");
//     //   return;
//     // }

//     try {
//       const response = await fetch("http://localhost:8080/api/v1/user/signUp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response) {
//         console.log(response);
//         // const data = await response.json();
//         // const token = response.config.headers.Authorization;
//         // localStorage.setItem("token", token);
//         // axios.defaults.headers.common["Authorization"] = token;
//         // console.log(token);
//       } else {
//         alert("error in registration: ");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // setResponseMessage('Error occurred while creating user');
//     }
//   };

//   return (
//     <>
//       <body>
//         <div
//           className="user-container"
//           style={{ backgroundImage: "url(bg3.jpg)" }}
//         >
//           <h1 className="text-center mt-3">Register</h1>

//           <div
//             className="container  py-md-2 mt-md-3"
//             style={{
//               width: "45%",
//               borderRadius: "8px",
//               padding: "16px",
//               // Optional: Set a max width to ensure the container doesn't stretch too wide on large screens
//             }}
//           >
//             <form>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">First Name</label>
//                 <input
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="form-control mt-3"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter fname"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Last Name</label>
//                 <input
//                   type="text"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter lastname"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">PhoneNumber</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="exampleInputEmail1"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="form-control"
//                   placeholder="Phone Number"
//                 />

//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword1">Password</label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                   />
//                 </div>
//                 <label htmlFor="exampleInputPassword1">Confirm Password</label>
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder=" conform Password"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputPassword1">Profile Picture</label>
//                 <input
//                   type="file"
//                   onChange={(e) => handleFileChange(e)}
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Upload File"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="btn btn-primary mt-2"
//               >
//                 Submit
//               </button>
//               <br />
//             </form>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

// export default Signup;
