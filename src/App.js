import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { fetchDogList } from './dog';
import Loading from './Loading';


/** App for Dogfinder
 *
 * Depending on path, show different components
*
* State:
* - haveDogs: indicates whether list of dogs has been returned from
*   fetch request
*
* App => {Loading, Nav, DogList, DogDetails}
*
*/

//TODO: doglist as own piece of state rather than global variable
// could have two pieces of state OR start haveDogs as null OR state as object
// that holds isLoading and haveDogs
let dogList;

function App() {
  const [haveDogs, setHaveDogs] = useState(false);

  /** Gets dog list and sets haveDogs state to true */
  async function getDogList() {
    const response = await fetchDogList();
    setHaveDogs(curr => true);
    dogList = response;
  }

  if (!haveDogs) {
    getDogList();
    return <Loading />;
  }

  //TODO: redirect to home page if they hit "/", use Navigate /*
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogList={dogList} />
        <Routes>
          <Route element={
            <DogList dogList={dogList} />} path="/dogs" />
          <Route element={<DogDetails dogList={dogList} />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
