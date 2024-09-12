import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signin = () => {

  const navigate = useNavigate();
  // State to hold form input values
  // const [user, setUser] = useState({
  //   email: '',
  //   password: ''
  // });

  // // Handle form field changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:8080/api/v1/user/signIn", {
  //       email: user.email,
  //       password: user.password
  //     }, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     });

  //     if (response) {
  //       // Assuming the token is in the response headers (adjust based on your API)
  //       const token = response.data.token; // Adjust if token is in a different field
  //       localStorage.setItem("token", token);
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //       console.log(token);
  //     } else {
  //       alert("Error in registration");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // // Google sign-in
  // const signInWithGoogle = (event) => {
  //   window.open(
  //     "http://localhost:8080/realms/ANIMALRESCUE/protocol/openid-connect/auth?response_type=code&client_id=ARFE&kc_idp_hint=google",
  //     "google login",
  //     "toolbar=no, menubar=no, width=700, height=700, top=100, left=300"
  //   );
  // };
  const [user, setUser] = useState({
    email: '',
    password: ''
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
      const response = await axios.post("http://localhost:8080/api/v1/user/signIn", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      //To check Login successful or not
      if (response.status === 200) {
              window.alert(response.data);
              // console.log(response.headers);
              localStorage.setItem("token", response.headers["access_token"]);
              navigate('/');
            } else {
        alert("error in registration: ");
      }
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage('Error occurred while creating user');
    }
  };
  // Google sign-in
  const signInWithGoogle = (event) => {
    window.open(
      "http://localhost:8080/realms/ANIMALRESCUE/protocol/openid-connect/auth?response_type=code&client_id=ARFE&kc_idp_hint=google",
      "google login",
      "toolbar=no, menubar=no, width=700, height=700, top=100, left=300"
    );
  };

  return (
    <>

      <section className="vh-75 d-flex justify-content-center align-items-center" style={{ padding: '2rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="row d-flex justify-content-center align-items-center h-75">
            <div className="col-12">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-4 d-none d-md-block">
                    <img src="image1.jpg" alt="login form" className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                        <div className="form-outline mb-3">
                          <input type="email" name="email" className="form-control form-control-lg" onChange={handleChange} />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        <div className="form-outline mb-3">
                          <input type="password" name='password' className="form-control form-control-lg" onChange={handleChange} />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block" type="button">Login</button><br /><br />
                        </div>
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/UserSignUp" style={{ color: '#393f81' }}>Register here</Link></p>
                        <a className="small text-muted" href="#!">OR</a><br />
                        <button onClick={signInWithGoogle} className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit">
                          <i className="fab fa-google me-2" /> Sign in with Google
                        </button><br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Signin
