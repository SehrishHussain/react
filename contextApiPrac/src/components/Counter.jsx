import React, { useContext } from 'react'
//importing our context
import { CounterContext } from '../context/Counter'


    const Counter = () => {
        const counterContext = useContext(CounterContext)
    
    
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increment</button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter;