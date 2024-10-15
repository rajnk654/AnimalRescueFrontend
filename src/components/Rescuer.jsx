import React, { useState } from 'react'


const Rescuer = ({ data}) => {

  const [rescuer, setRescuer] = useState(data);

  setRescuer(data);

  console.log(rescuer);
  const { name, city, price, rating } = rescuer;

  return (
    <>
    
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp" alt="Trendy Pants and Shoes" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title text-center">Rescuer Details</h3>
            <h4 className='card-title text-center'>Name : {firstName}</h4>
            <h4 className='card-title text-center'>City: {city}</h4>
            <h4 className='card-title text-center'>Price: {price}</h4>
            <h4 className='card-title text-center'>Rating: {5}</h4>
          </div>
        </div>
      </div>
    </div>
</>

  )
}

export default Rescuer
