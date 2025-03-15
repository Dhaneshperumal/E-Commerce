// import React from 'react';
// import products from '../data/products';

// const Handgun = () => {
//   const handgun = products.filter(item => item.category === 'handgun');

//   return (
//     <div className="row">
//       {handgun.map((product) => (
//         <div className="col-md-4 mb-4" key={product.id}>
//           <div className="card h-100">
//             <img 
//               src={`${process.env.PUBLIC_URL}/images/${product.image}`} 
//               className="card-img-top" 
//               alt={product.name} 
//             />
//             <div className="card-body">
//               <h5 className="card-title">{product.name}</h5>
//               <p className="card-text">₹{product.price}</p>
//               <p className="card-text">{product.description}</p>
//               <button className="btn btn-primary mr-3">Add to Cart</button>
//               <button className="btn btn-primary">Buy</button>

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Handgun;


import React, { useState } from 'react';
import products from '../data/products';
import { Button } from 'react-bootstrap';


const Handgun = () => {
  const handgun = products.filter(item => item.category === 'handgun');
  
  const [quantities, setQuantities] = useState(
    handgun.reduce((acc, product) => {
      acc[product.id] = 1; 
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  return (
    <div className="row">
      {handgun.map((product) => (
        <div className="col-md-4 mb-5" key={product.id}>
          <div className="card h-100 custom-card">
          {product.id === 1 && (
              <span className="badge bg-success position-absolute" style={{ top: '10px', left: '10px', zIndex: 1 }}>New Arrival</span>
            )}
          {product.id === 3 && (
              <span className="badge bg-success position-absolute" style={{ top: '10px', left: '10px', zIndex: 1 }}>Top rated</span>
            )}
              {/* <span className="badge bg-success position-absolute" style={{ top: '10px', left: '10px', zIndex: 1 }}>New Arrival</span> */}
            <img 
              src={`${process.env.PUBLIC_URL}/images/${product.image}`} 
              className="card-img-top" 
              alt={product.name} 
              
            />
            
            <div className="card-body">
              {/* {product.id === 3 && (
                  // <span className="badge bg-success">Top rated</span> 
              )} */}
              <h5 className="card-title">{product.name}</h5>

              {product.id === 1 && (
                <Button variant="danger">-45%</Button>
              )}
              
              <p className="card-text price">₹{product.price}</p>
              <p className="card-text">{product.description}</p>

            <div className="d-flex align-items-center mt-3">
              <button className="btn btn-secondary btn-sm me-2 mt-2 align-self-start" onClick={() => decrement(product.id)}>-</button> 
              <span className="text-center me-2 ">{quantities[product.id]}</span>
              <button className="btn btn-secondary btn-sm me-2 mt-2 align-self-start" onClick={() => increment(product.id)}>+</button>
            </div>
            <div className="button-group">
              <button className="btn btn-outline-primary">Add to Cart</button>
              <button className="btn btn-primary">Buy</button>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Handgun;