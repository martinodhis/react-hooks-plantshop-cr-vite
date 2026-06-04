import React, { useState } from "react";

function PlantCard({ plant }) {
  // 1. Add state to track if the plant is in stock (defaults to true)
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
      {/* 2. Conditionally render the button based on the inStock state */}
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(true)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;