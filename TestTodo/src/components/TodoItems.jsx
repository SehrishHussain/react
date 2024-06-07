import React from 'react';
import {useState} from 'react';
import {useTodo} from '../contexts';


function TodoItems() {
    const [todo, setTodo] = useState('');
    
  return (
    <div>
      <h1>Todo Items</h1>
    </div>
  )
}

export default TodoItems
