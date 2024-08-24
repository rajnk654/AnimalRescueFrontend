import React from 'react'
import { useState } from 'react'
import './SignUp.css'



const Signup = () => {

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

        try {
            const response = await fetch('http://localhost:8080/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response) {
                // const data = await response.json();
                console.log(response)
            } else {
                alert("error in registration: ")
            }
        } catch (error) {
            console.error('Error:', error);
            // setResponseMessage('Error occurred while creating user');
        }

    };


    return (
        <>

            <h1 className='text-center mt-3'>Register</h1>
            <div className="container w-25 rouded-6 p-4">

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

        </>
    )
}

export default Signup;
