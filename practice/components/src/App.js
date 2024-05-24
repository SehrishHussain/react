import React from 'react';
import './App.css';
import { useState } from 'react';
import { sculptureList } from './data';

function App() {
  const [index, setIndex] = useState(0);
  const [showdetail, setshowdetail] = useState(false);

const sculptList = sculptureList[index]

 function nextSculpture() {

  if(index < sculptureList.length - 1) {
  setIndex(index + 1);
  }
}
function prevButton(){
  if(index > 0) {
    setIndex(index -1);
  }
}
function showDetails(){
  setshowdetail(!showdetail);

}
  
  return (
    <> 
    <button onClick={nextSculpture} disabled={index  === sculptureList.length - 1}> Next </button>
    {index >= 1 && <button onClick={prevButton}>Previous</button>}
    <h1><i>{sculptList.name}</i> by {sculptList.artist}</h1>
    <p>( {index + 1} of {sculptureList.length})</p>

  <button onClick={showDetails}>{showdetail? 'Show': 'Hide'} details</button>
    { showdetail && <p>{sculptList.description}</p>  }
  <img src= {sculptList.url}></img>
    </>
  )
}
export default App;
