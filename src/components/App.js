import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const[adoptedState, setAdoptedState] = useState(false)
  
  function onChangeType(e){    
    setFilters({type:e.target.value})
  }
  const onFindPetsClick =(e) =>{
    console.log(e)
  }
  useEffect(()=>{
    const API = filters.type === 'all'?
    'http://localhost:3001/pets':
    `http://localhost:3001/pets?type=${filters.type}`
    fetch(API)
    .then(r=>r.json())
    .then(data=>{
      setPets(data)
    })
  },[filters])


  const onAdoptPet = (id) => {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);
  }
    



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick ={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;