import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { getDogList } from './dog';
import Loading from './Loading';


const DOG_LIST = [{
  "name": "Whiskey",
  "age": 5,
  "src": "whiskey",
  "facts": [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"
  ]
},
{
  "name": "Duke",
  "age": 3,
  "src": "duke",
  "facts": [
    "Duke believes that ball is life.",
    "Duke likes snow.",
    "Duke enjoys pawing other dogs."
  ]
},
{
  "name": "Perry",
  "age": 4,
  "src": "perry",
  "facts": [
    "Perry loves all humans.",
    "Perry demolishes all snacks.",
    "Perry hates the rain."
  ]
}];

let dogList;

function App() {
  const [haveDogs, setHaveDogs] = useState(null);

  if (haveDogs === null){
    dogList = getDogList();
    setHaveDogs(curr => false);
  }
  console.log("doglist before loading", dogList, "haveDogs", haveDogs)

  function updateDoglistStatus() {
    console.log("dogList in update function", dogList, "haveDogs", haveDogs)
    if (!(dogList instanceof Promise)) setHaveDogs(curr => true);
    return;
  }

  if (!haveDogs) {
    return <Loading haveDogs={haveDogs} update={updateDoglistStatus} />;
  }
  console.log("doglist after loading", dogList, "haveDogs", haveDogs)

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogList={dogList} />
        <Routes>
          <Route element={
            <DogList
              dogList={dogList}
              haveDogs={haveDogs}
              update={updateDoglistStatus} />} path="/dogs" />
          <Route element={<DogDetails dogList={dogList} />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
