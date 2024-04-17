import React,{useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants,addNewPlant,sellPlant}) {
  const [searchTerm,setSearchTerm]=useState('')
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants.filter(plant=>plant.name.toLowerCase().startsWith(searchTerm.toLowerCase()))} sellPlant={sellPlant} />
    </main>
  );
}

export default PlantPage;
