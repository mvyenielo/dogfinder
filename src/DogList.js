import React from "react";
// import { getSource } from "./dog";

/**
 * Renders list of dogs on homepage with picture and name
 *
 * Props:
 * - dogList: Array of dog objects [{name: "Whiskey"...}, ...]
 */
function DogList({ dogList }) {

  return (
    <div className="DogList">
      {dogList.map(dog =>
        <div key={dog.name} className="DogList-container">
          <img src={`/${dog.src}.jpg`}></img>
          <h3>{dog.name}</h3>
        </div>)}
    </div>
  );
}

export default DogList;