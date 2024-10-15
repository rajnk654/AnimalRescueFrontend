import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "./Header.css";
import { useAuth } from "../../Context/auth";



const Header = () => {
  const [auth, updateAuth] = useAuth();
  const [logOut, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    updateAuth({
      username: null,
      token: null,
      userId: null,
      role: null,
    });
    setLogout(true);
    navigate("/"); // Redirect immediately after logout
    window.alert("User Logged Out")
  };

  // const[auth] = updateAuth();
  const [profileUrl, setProfileUrl] = useState(
    "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
  );
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
          <div className="container-fluid">
            <Link className="navbar custom-font" to="/">
              {/* <img 
                    src="dog1.jpg" 
                    alt="Animal Rescue Logo" 
                    style={{ height: '40px', marginRight: '10px' }} /> */}
              Animal Rescue
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/rescuer">
                    Rescuer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/AdoptAnimal"
                  >
                    Adopt
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Contact">
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/about">
                    About
                  </Link>
                </li>

                {!auth?.token && (
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Signin">
                      Signin
                    </Link>
                  </li>
                )}

                {auth?.token && (
                  <li className="nav-item">
                    <b>
                      <Link
                        className="h1 navbar-link-white nav-link "
                        aria-current="page"
                        to={"/userProfile"}
                      >
                        <img
                          src={profileUrl}
                          className="img-fluid rounded"
                          alt="Profile"
                          width={25}
                        />
                      </Link>
                    </b>
                  </li>
                )}
                {!auth?.token && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign Up
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/UserSignUp">
                          User
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/RescuerSignUp">
                          Rescuer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Admin">
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}

                {/* {auth?.token &&<li className="nav-item">
                  <Link className="header-nav-link" onClick={handleLogout}>
                    <span
                      className="header-nav-text"
                      style={{ color: "black" }}
                    >
                      Logout
                    </span>
                  </Link>
                </li>} */}

                {auth?.token && (
                  <li className="nav-item">
                    <button
                      className="btn btn-link header-nav-link"
                      onClick={handleLogout}
                      style={{
                        color: "white", // Button text color
                        padding: "10px 20px", // Adjust padding for a bigger button feel
                        fontSize: "18px", // Increase font size
                        borderRadius: "8px", // Smooth out the edges
                      }}
                      
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
