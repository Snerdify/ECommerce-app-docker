// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    // Fetch user data (you may need authentication logic)
    axios.get('http://localhost:5000/api/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleLogout = () => {
    // Implement logout logic and clear user data
    setUser(null);
  };

  return (
    <div>
      <h1>E-commerce App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view products.</p>
      )}
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Add more product details as needed */}
              </div>
              {/* Add buttons for buying products */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
