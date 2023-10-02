import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<DogList dogList={DOG_LIST} />} path="/" />
          <Route element={<DogDetails dogList={DOG_LIST} />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
