import React from 'react'
import { useState } from 'react'
import './Admin.css'

const Admin = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber
        };
        console.log(userData);
    }
    return (
        <><div className="Admin-cotainer">
            <h1 className='text-center mt-3'>Register</h1>
            <div
                className="container  py-md-2 mt-md-1"
                style={{
                    width: '45%',
                    borderRadius: '8px',
                    padding: '16px',
                    // Optional: Set a max width to ensure the container doesn't stretch too wide on large screens
                }}
            >

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

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <label htmlFor="exampleInputPassword1">Conform Password</label>
                        <input type="Conform password" value={conformPassword} onChange={e => setConformPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder=" conform Password" />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button><br />
                </form>
            </div>
            </div>
        </>
    )
}

export default Admin