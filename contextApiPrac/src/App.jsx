import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import { useContext } from 'react'  // to use the value of any Context we need a hook, useContext
import { CounterContext } from './context/Counter'  //now we import our context that we have made
//above import we havent imported Provider we have only imported actual context we have made

function App() {

const counterState = useContext(CounterContext) //counterState was the state in context we made in i.e. counterProvider and
// useContext is reading the state from our Context and is brining it here in above line of code.
// whatever was passed in line 12 of Counter.jsx/context i.e our Context that we've created is coming here via above line of code/
 console.log("Context:", counterState); // an object with values is passed



  return (
    <>
    <div className='App'>
      <h1> counter count is: {counterState.count} </h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     </div>
    </>
  )
}

export default App
