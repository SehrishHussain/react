import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <h1> counter count is: </h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     </div>
    </>
  )
}

export default App
