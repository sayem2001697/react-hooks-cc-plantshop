import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,sellPlant}) {
  return (
    <ul className="cards">{
      plants
      .filter(plant=> !plant.sold)
      .map(plant=> <PlantCard plant={plant} key={plant.id} sellPlant={sellPlant}/>)}</ul>
  );
}

export default PlantList;
