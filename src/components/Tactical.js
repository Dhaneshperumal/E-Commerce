import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import products from '../data/products';
import Footer from './footer';

const Tactical = ({ addToCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tactical = products.filter(item => item.category === 'tactical');

  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    if (searchQuery) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const [quantities, setQuantities] = useState(
    tactical.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] });
    navigate('/AddToCart');
  };

  const handleBuyClick = (product) => {
    navigate('/Checkout', { state: { product: { ...product, quantity: quantities[product.id] } } });
  };

  return (
    <>
    

      {searchQuery ? (
        <div className="container my-5">
          <h2 className="text-center fs-3 mb-4">Search Results for "{searchQuery}"</h2>
          <hr />
          {searchResults.length > 0 ? (
            <div className="row">
              {searchResults.map((product) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                  <div className="card shadow-sm">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                      className="card-img-top product-image"
                      alt={product.name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text fw-bold">Price: ₹{product.price}</p>
                      <Link to={`/${product.category}`}>
                        <button className="btn btn-outline-primary w-100">Show More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="text-center">No products found</h3>
          )}
        </div>
      ) : (
        <div className="container my-5">
          <h1 className="text-center fs-3 mb-4">Tactical Collections</h1>
          <div className="row">
            {tactical.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                <div className="card shadow-sm custom-card">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold">₹{product.price}</p>
                    <p className="card-text">{product.description}</p>

                    <div className="d-flex justify-content-center align-items-center quantity-container">
                      <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrement(product.id)}>-</button>
                      <span className="mx-2 mt-3 fw-bold">{quantities[product.id]}</span>
                      <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increment(product.id)}>+</button>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                      <button className="btn btn-outline-primary w-100 me-0 me-sm-2 mb-2 mb-sm-0" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                      <button className="btn btn-primary w-100" onClick={() => handleBuyClick(product)}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Tactical;
