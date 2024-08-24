import React, { useState } from 'react'

const RescuerSignUp = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [Address, setAddress] = useState("");
    const [ZipCode, setZipcode] = useState("");
    const [conformPassword, setConformPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const RescuerSignUp = {
            firstName,
            lastName,
            email,
            phoneNumber,
            state,
            city,
            Address,
            ZipCode
        }
    }

    return (
        <>
            <h1 className='text-center mt-3'>Register</h1>
            <div className="container w-25 rouded-5 p-2">

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
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input type="text" value={lastName} onChange={e => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Addres" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="exampleInputEmail1">State</label>
                            <input type="text" value={state} onChange={e => setState(e.target.value)} className="form-control" id="state" placeholder="Enter state" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor='exampleInputEmail1'>City</label>
                            <input type='text' value={city} onChange={e => setCity(e.target.value)} className="form-control" id="city" placeholder="Enter City" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor='exampleInputEmail1'>Zipcode</label>
                        <input type='text' value={ZipCode} onChange={e => setZipcode(e.target.value)} className="form-control" id="zipCode" placeholder="Enter Zipcode" />
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <label htmlFor="exampleInputPassword1">Conform Password</label>
                    <input type="Conform password" value={conformPassword} onChange={e => setConformPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder=" conform Password" />
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button><br />
                </form >
            </div >
        </>
    )
}

export default RescuerSignUp;
