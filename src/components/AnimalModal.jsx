import React from 'react'
import { useNavigate } from 'react-router-dom';

const AnimalModal = () => {
    const navigate = useNavigate();



    const handleMoreDetailsClick = () => {
        navigate(`/AdoptAnimal`);
      };
    return (
        <>
            <div className="container w-50">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="Dog.jpg" className="card-img-top" alt="Animal" />

                            </div>
                            <div className="col-md-7 ">
                                <div className="conatiner md-3">
                                <h5 className="card-title">Description</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col "></div>
                            <div className="col mt-n2">
                                <button type="button" className="btn btn-info mx-4" onClick={() => handleMoreDetailsClick()}>Back</button>
                                <button type="button" className="btn btn-primary mx-2"> Adoption</button>
                                </div>
                        </div>
                    </div>  
                </div>
            </div>

        </>
    )
}

export default AnimalModal
