import React, {useState} from "react";

function Pet({pet, onAdoptPet}) {
  const[adoptedState, setAdoptedState] = useState(pet.isAdopted)
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === 'male'?'♂ ':'♀ '}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age} Years Old</p>
          <p>{pet.weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted?<button className="ui disabled button">Already adopted</button>:
        <button className="ui primary button" onClick={(e)=> onAdoptPet(pet.id)}>Adopt pet</button>}
        
        
      </div>
    </div>
  );
}

export default Pet;