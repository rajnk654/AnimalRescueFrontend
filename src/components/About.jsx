import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <center>
      <h1>About Us</h1></center>
      <div className='container-fluid'>
        <div class="d-flex m-3">
          <div class="p-2 flex-fill m-3">

            Welcome to Paws and Claws Rescue,
            your trusted partner in the journey 
            of saving and finding loving homes 
            for animals in need.
            Our mission is to rescue, rehabilitate, 
            and rehome abandoned and abused animals,
            providing them with the care and compassion 
            they deserve.
            <h4>Our Mission</h4>
            At Paws and Claws Rescue, we believe every 
            animal deserves a second chance at life.
            Our dedicated team of volunteers and staff 
            work tirelessly to rescue animals from shelters, 
            abusive situations,
            and the streets, ensuring they receive the necessary
             medical care, nourishment, and love.
            We are committed to finding each animal a forever 
            home where they can thrive
            and bring joy to their new families.
            We collaborate with shelters and community 
            members to rescue animals in need,
            providing them with immediate care and attention.
            Our skilled veterinarians and animal behaviorists 
            work with each animal to address any health or
            behavioral issues, preparing them for adoption.
            We connect animals with loving families through 
            our easy-to-use web application,
            allowing potential adopters to browse profiles, 
            meet their new companions,
            and complete the adoption process seamlessly.
            There are many ways to get involved with Paws 
            and Claws Rescue.
            Whether you are looking to adopt, volunteer, 
            foster, or donate,
            your support can make a significant difference
             in the lives of animals in need.
            Together, we can create a brighter future for our 
            furry friends.

          </div>

          <div class="p-2 flex-fill">
          <img src={"Animal.jpg"} className="object-fit-contain border rounded" alt="" width={"800px"} />
          </div>

        </div>
      </div>
    </>
  )
}

export default About;
