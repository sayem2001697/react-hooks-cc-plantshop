import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
 const [plant,setPlant]=useState({
  name:'',image:'',price:0,
 });

 function handleChange(e) {
  setPlant({...plant,[e.target.name]:e.target.value})

 }
 function handleSubmit(e){
  e.preventDefault();
  addNewPlant(plant);
 }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={plant.name} 
        onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={plant.image}
         onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={plant.price} 
        onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
