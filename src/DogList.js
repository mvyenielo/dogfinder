import React from "react";
import duke from "./duke.jpg"
import perry from "./perry.jpg"
import whiskey from "./whiskey.jpg"

function DogList({ dogList }) {
  return (
    <div className="DogList">
      {dogList.map(dog =>
        <div key={dog.name} className="DogList-container">
          <img src={dog.src}></img>
          <h3>{dog.name}</h3>
        </div>)}
    </div>
  );
}

export default DogList;