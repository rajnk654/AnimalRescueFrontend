import React from 'react'
import FosterCarePage from '../FosterCarePage'
import Dashboard from '../Dashboard'
import person1 from '../../assets/person1.jpg'

const FosterCare = () => {
    return (
        
            <div className='container py-md-3 mt-md-3 vh-100'>
                <div className="row">
                    <div className="col">
                        <FosterCarePage />
                        {/* <img src={person1} className="" alt="..." /> */}
                    </div>
                </div>
            </div>
        
    )
}

export default FosterCare
