import React from 'react'
import person1 from '../assets/person1.jpg'

const FosterCarePage = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 vh-100">
                <div className="py-md-3 mt-md-3">
                    <div className="card ">
                        <img src={person1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        {/* <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default FosterCarePage
