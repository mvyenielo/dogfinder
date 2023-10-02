import React from "react";



function DogList({ dogList }) {
  return (
    <div className="DogList">
      {dogList.map(dog =>
        <div key={dog.name} className="DogList-container">
          <img src={`../public/${dog.src}.jpg`}></img>
          <h3>{dog.name}</h3>
        </div>)}
    </div>
  );
}

export default DogList;