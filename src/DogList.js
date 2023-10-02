import React from "react";
import { getSource } from "./dog";

function DogList({ dogList }) {

  return (
    <div className="DogList">
      {dogList.map(dog =>
        <div key={dog.name} className="DogList-container">
          <img src={getSource(dog.src)}></img>
          <h3>{dog.name}</h3>
        </div>)}
    </div>
  );
}

export default DogList;