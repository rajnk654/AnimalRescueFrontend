import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="about py-md-3 mt-md-3">
        <section className="about-section " style={{ marginBottom: '20px' }}>
          <div className="Animal_Image ">
            <img src="Animal.jpg" className="img-fluid" alt="LandMarket" />
          </div>

          <div className="about-content "
          >
            <h2>About Us</h2>
            <p>
              Welcome to Animal Rescue,
              your trusted partner in the journey
              of saving and finding loving homes
              for animals in need.
              Our mission is to rescue, rehabilitate,
              and rehome abandoned and abused animals,
              providing them with the care and compassion
              they deserve.
            </p>
          </div>
        </section>
        <section className="cards-section">
          <div className="card card-3d">
            <h3>Our Mission</h3>
            <p>for now ur watching a website with empty mission
              We are dedicated to providing compassionate care and second chances to abandoned,
              abused, and homeless animals. T
            </p>
          </div>

          <div className="card card-3d">
            <h3>Our Services</h3>
            <p>We are committed to protecting the well-being of abandoned and vulnerable animals,
              ensuring they receive the medical attention, nourishment, and compassion they deserve.

            </p>
          </div>

          <div className="card card-3d">
            <h3>Our Vision</h3>
            <p>We aspire to build a world where animal homelessness is eradicated,
              and every animal has a safe, loving, and permanent home.
              By fostering a culture of empathy and education.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;