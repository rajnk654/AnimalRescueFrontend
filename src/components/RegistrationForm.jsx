import React, { useState } from 'react'

const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber
        };
    }
        
  return (
    <>
    <h1 className='text-center mt-3'>Feedback Form</h1>
            <div className="container rouded-5 p-2">

                <form>
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lastname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>PhoneNumber</label>
                        <input type="tel" id="phone" name="exampleInputEmail1" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                            className="form-control"
                            placeholder="Phone Number" />
                        
                        </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button><br />
                </form>
            </div>

    </>
  )
}

export default RegistrationForm;
