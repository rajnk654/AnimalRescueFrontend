import { Link } from 'react-router-dom'

import React, { useEffect } from 'react'
import './Header.css'


const Header = () => {
    
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
                <div className="container-fluid">
                    <Link className="navbar custom-font" to="/">
                    {/* <img 
                    src="dog1.jpg" 
                    alt="Animal Rescue Logo" 
                    style={{ height: '40px', marginRight: '10px' }} /> */}
                Animal Rescue</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/rescuer" >Rescuer</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Contact" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Signin" >Signin</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign Up
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/UserSignUp">User</Link></li>
                                    <li><Link className="dropdown-item" to="/RescuerSignUp">Rescuer</Link></li>
                                    <li><Link className="dropdown-item" to="/Admin">Admin</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/AdoptAnimal" >Adopt</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/blogPage" >Blog</Link>
                            </li>
                        </ul>      
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Header
