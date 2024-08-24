import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  
  return (
<>
    <div>
      &lt;&gt;
      <footer className=" footer-custom text-center text-lg-start ">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Animal Rescue
                </h6>
                <p>
                You can make a difference! Whether through adoption, volunteering, or donations, 
                your support helps us continue our lifesaving work. 
                Join us in our mission to create a better world for animals.</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              
              {/* Grid column  */}
              {/* Grid column */}
               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
               
               <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                 </h6>
                 <p>
                 <Link className="nav-link " aria-current="page" to="/" >Home</Link>
                </p>
                <p>
                <Link className="nav-link " aria-current="page" to="/about" >About</Link>
                 </p>
                 <p>
                 <Link className="nav-link " aria-current="page" to="/contact" >Contact Us</Link>
                 </p>
                 <p>
                 <Link className="nav-link " aria-current="page" to="/Signin" >SignIn</Link>
                 </p>
                <p>
                <Link className="nav-link " aria-current="page" to="/Blog" >Blog</Link>
               </p>
               </div> 
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" />Hubli,Karnataka</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  rajnkolekar@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 91 9449938328</p>
                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
    </>
  )
}

export default Footer
