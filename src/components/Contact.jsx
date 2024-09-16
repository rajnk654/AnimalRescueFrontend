import React, { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Contact = () => {
  const captchaRef = useRef(null);

  const [disableSubmit, setSubmitbutton] = useState(true);

  const [contact, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    token: ""
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tokenValue = captchaRef.current.getValue();
    setUser((prevData) => ({ ...prevData, token: tokenValue }));
    console.log(contact,);

    const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

    try {
      const response = await axios.post(`${url}/contact`, contact)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // captchaRef.current.reset();

  }


  return (
    <>

      <section className="py-3 py-md-5 py-xl-8" style={{ backgroundColor: 'dark' }}>
        <div className="container-fluid py-md-2 mt-md-1">
          <div className="row">
            <div className="col-12">
              <div className="card border border-dark rounded shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <div className="row gy-3 gy-md-4 gy-lg-0">
                    <div
                      style={{
                        background: 'url(Image.jpg)',
                        backgroundSize: 'cover',
                        opacity: '0.7',
                      }}
                      className="col-12 col-lg-6 d-flex align-items-center justify-content-center"
                    >
                      <div className="contact py-md-3 mt-md-2 text-center">
                        <h2 className="h1 mb-3 text-light">Get in touch</h2>
                        <p className="lead fs-4 text-light mb-4 mb-xxl-5">
                          We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.
                        </p>
                        <div className="d-flex justify-content-center mb-4 mb-xxl-5">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-geo"
                              viewBox="0 0 16 16"
                            >
                              {/* SVG Content */}
                            </svg>
                          </div>
                          <div>
                            <h4 className="mb-3 text-light">Address</h4>
                            <address className="mb-0 text-light opacity-75">Hubli, Karnataka</address>
                          </div>
                        </div>
                        <div className="row mb-4 mb-xxl-5">
                          <div className="col-12 col-xxl-6">
                            <div className="d-flex mb-4 mb-xxl-0">
                              <div className="me-4 text-primary">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="currentColor"
                                  className="bi bi-telephone-outbound"
                                  viewBox="0 0 16 16"
                                >
                                  {/* SVG Content */}
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-3 text-light">Phone</h4>
                                <p className="mb-0">
                                  <a
                                    className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                                    href="tel:+9449938328"
                                  >
                                    (505) 792-2430
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xxl-6">
                            <div className="d-flex mb-0">
                              <div className="me-4 text-primary">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="currentColor"
                                  className="bi bi-envelope-at"
                                  viewBox="0 0 16 16"
                                >
                                  {/* SVG Content */}
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-3 text-light">E-Mail</h4>
                                <p className="mb-0">
                                  <a
                                    className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                                    href="mailto:demo@yourdomain.com"
                                  >
                                    rajnk654@gmail.com
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-alarm"
                              viewBox="0 0 16 16"
                            >
                              {/* SVG Content */}
                            </svg>
                          </div>
                          <div>
                            <h4 className="mb-3 text-light">Opening Hours</h4>
                            <div className="d-flex mb-1">
                              <p className="text-light fw-bold mb-0 me-5">Mon - Fri</p>
                              <p className="text-light opacity-75 mb-0">9am - 5pm</p>
                            </div>
                            <div className="d-flex">
                              <p className="text-light fw-bold mb-0 me-5">Sat - Sun</p>
                              <p className="text-light opacity-75 mb-0">9am - 2pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="row align-items-lg-center h-100">
                        <div className="col-12">
                          <form action="#!">
                            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                              <div className="col-12">
                                <label htmlFor="fullname" className="form-label">
                                  Full Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text" onChange={(e) => handleChange(e)}
                                  className="form-control"
                                  id="fullname"
                                  name="fullName"
                                  required
                                />
                              </div>
                              <div className="col-12 col-md-6">
                                <label htmlFor="email" className="form-label">
                                  Email <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-envelope"
                                      viewBox="0 0 16 16"
                                    >
                                      {/* SVG Content */}
                                    </svg>
                                  </span>
                                  <input
                                    type="email" onChange={(e) => handleChange(e)}
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <label htmlFor="phoneNumber" className="form-label">
                                  Phone Number
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-telephone"
                                      viewBox="0 0 16 16"
                                    >
                                      {/* SVG Content */}
                                    </svg>
                                  </span>
                                  <input
                                    type="tel" onChange={(e) => handleChange(e)}
                                    className="form-control"
                                    id="phone"
                                    name="phoneNumber"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <label htmlFor="message" className="form-label">
                                  Message <span className="text-danger">*</span>
                                </label>
                                <textarea onChange={(e) => handleChange(e)}
                                  className="form-control"
                                  id="message"
                                  name="message"
                                  rows={4}
                                  required
                                ></textarea>
                              </div>
                              <ReCAPTCHA
                                sitekey="6LfuuD4qAAAAAG7HUE46H8OpgVuT_zakXEvaJkO_"
                                ref={captchaRef}
                                onChange={() => setSubmitbutton(false)}
                              />
                              <div className="col-12 text-center">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                  onClick={(e) => handleSubmit(e)}
                                  disabled={disableSubmit}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>

                          </form>
                        </div>
                      </div>
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

export default Contact
