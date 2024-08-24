import React from 'react'
import RegistrationForm from './RegistrationForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className="row">
          <div className="col-md-10 ">
            <img src="CntactUs.jpg" className="object-fit-sm-contain border rounded mx-auto" alt="" width={"1280px"} />
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <ContactInfo />
          </div>
          <div className="flex-fill">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact
