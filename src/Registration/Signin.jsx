import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import parseJwt from "../Context/ParseJwt";
import { useAuth } from "../Context/auth";

const Signin = () => {
  const navigate = useNavigate();
  const [auth, updateAuth] = useAuth();
  //const[updateAuth]=useAuth();

  // const signInWithGoogle = () => {
  //   try {
  //       const signInURL = "http://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Fuser%2FsignInWithGoogle&response_type=code&client_id=891906603364-pl6phg11ggdsgvn0482fuc4qjq5tmpgh.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&access_type=offline";
  //       const signInWindow = window.open(
  //           signInURL,
  //           "google login",
  //           "toolbar=no, menubar=no, width=700, height=700, top=100, left=300"
  //       );

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => signInWithGoogle(codeResponse),
    onError: (error) => toast.error("Google login failed. Please try again."),
  });

  const signInWithGoogle = async (codeResponse) => {
    try {
      const requestBody = {
        accessToken: codeResponse?.access_token,
      };
      const response = await axios
        .post(`http://localhost:8080/api/v1/user/signInWithGoogle`, requestBody)
        .catch((err) => {
          console.error(err);
          Windows.error("An error occurred during login. Please try again.");
        });

      if (response?.status === 200) {
        console.log(response);
        window.alert("Logged in Successfully.", {
          position: "top-right",
          autoClose: 3000,
        });
        const token = response.headers["access_token"];
        localStorage.setItem("token", token);
        // Update auth context state
        updateAuth({
          token: token,
          username: "",
          role: "",
        });
        setTimeout(() => {
          setUser(null);
          navigate("/");
        }, 3000);
      } else if (response?.status === 401) {
        window.alert("Enter valid Credentials...!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      Windows.error("An error occurred during login. Please try again.");
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signIn",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //To check Login successful or not
      if (response.status === 200) {
        window.alert(response.data);
        // console.log(response.headers);
        const token = response.headers["access_token"];
        localStorage.setItem("token", token);
        // Update auth context state
        updateAuth({
          token: token,
          username: "",
          role: "",
        });
        setTimeout(() => {
          setUser(null);
          navigate("/");
        }, 2000);
      } else {
        alert("error in registration: ");
      }
      if (response.status === 200) {
        window.alert(response.data);
        // console.log(response.headers);
        localStorage.setItem("token", response.headers["access_token"]);
        const userToken = parseJwt(response.headers["access_token"]);
        console.log("userToken data:", userToken);

        updateAuth({
          userId: userToken.userId,
          token: response.headers["access_token"],
          username: userToken.username || "", // Assuming userToken has a username field
          role: userToken.authorities || "", // Use authorities field for the role
        });
        console.log("role" + userToken.authorities);
        if (userToken?.authorities === "admin") {
         
          setTimeout(() => {
            navigate("/admin");
          }, 1000); // 2000 milliseconds = 2 seconds delay
        } //
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // setResponseMessage('Error occurred while creating user');
  };

  return (
    <>
      <section
        className="vh-75 d-flex justify-content-center align-items-center"
        style={{ padding: "2rem" }}
      >
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="row d-flex justify-content-center align-items-center h-75">
            <div className="col-12">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-4 d-none d-md-block">
                    <img
                      src="image1.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-lg"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-lg"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            onClick={handleSubmit}
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                          <br />
                          <br />
                        </div>
                        <a className="small text-muted" href="/forgot-password">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/UserSignUp" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <a className="small text-muted" href="#!">
                          OR
                        </a>
                        <br />
                      </form>
                      <button
                        onClick={() => googleLogin()}
                        className="btn btn-lg btn-block btn-primary"
                        style={{ backgroundColor: "#dd4b39" }}
                        type="submit"
                      >
                        <i className="fab fa-google me-2" /> Sign in with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
