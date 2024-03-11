import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)

  const addValue = () => {
   // console.log("clicked", counter)
    //counter = counter + 1;
    setCounter((prevCounter) => prevCounter +1)  // add counter 2 times
    setCounter((counter) => counter + 1)  // workes the same as above // things happen by call back are: once call is complete another call occurs
    setCounter((counter) => counter + 1)
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    console.log("counter:",counter);
    }  
  }
  return (
    <>
      <h1>Chai and react {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
