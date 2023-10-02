import React from "react";
import duke from "./duke.jpg";
import whiskey from "./whiskey.jpg";
import perry from "./perry.jpg";


function DogList({ dogList }) {

  function getSource(name) {
    let src;
    if (name === "duke") src = duke;
    if (name === "whiskey") src = whiskey;
    if (name === "perry") src = perry;
    return src;
  }
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