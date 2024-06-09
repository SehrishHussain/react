import React from 'react';
import {useState} from 'react';
import {useTodo} from '../context';


function Todoform() {
    const[todo, setTodo] = useState('');
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({todo, completed: false})
        setTodo("")

    }


  return (
    <form onSubmit={add} className='flex'>
      <h1>Todo Form</h1>
      <input 
      type='text'
      placeholder='Enter Todo'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className='className="w-full border border-pink-300 rounded-l-lg px-3 outline-none duration-150 bg-pink-100 py-1.5 hover:bg-pink-200 hover:border-pink-500 transition ease-in-out transform hover:scale-105"
'
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-pink-600 text-white shrink-0 hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105">
       Add </button>
        
       </form>
  )
}

export default Todoform
