import React from "react";
import { useState } from "react";

function PlantCard({plant,sellPlant}) {
  const [isClicked, setIsClicked] = useState(false)

  function toggle(){
    setIsClicked(!isClicked)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked? 
        <button className="primary" onClick={toggle}>In Stock</button>
       : 
        <button onClick={toggle}>Out of Stock</button>
      }
    </li>
  );
}

export default PlantCard;
