import React, { useEffect,useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const PlantAPI='http://localhost:6001/plants';

function App() {
  const [plants,setPlants] = useState([]);

  useEffect(() => fetch(PlantAPI)
  .then(res=>res.json())
  .then(setPlants)
  ,[]);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} 
      addNewPlant={addNewPlant}
      sellPlant={sellPlant} />
    </div>
  );

  function addNewPlant(plant){
    fetch(PlantAPI,{
      method:'POST',
      headers:{
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(plant),
    })
    .then(res=>res.json())
    .then(json => setPlants([...plants,json]));
  }

  function sellPlant(plant){
    setPlants(plants.map(p=>p.id !== plant.id
      ? p 
      : {...p, sold: true}
      ));
  }
}

export default App;
