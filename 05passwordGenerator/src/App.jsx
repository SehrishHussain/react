import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789"  // numAllowed == true
    if (charAllowed) str += "!@#$%^&*(){}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    
    }
    setPassword(pass);
    

  }, [length, numAllowed, charAllowed, setPassword]) 
  
  const copyPasstoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999); 
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(() => {
  passwordGenerator();
}, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <div> 
    <h1 className= 'text-4xl text-center text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 py-5 '>
      <input type='text'
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
        <button
        onClick={copyPasstoClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 rounded-lg pl-3 mr-3 ml-1'>Copy</button>
      
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1' >
        <input 
        type='range' 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        ></input>
        <label className='text-white'>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1 text-white'>
        <input
        type='checkbox'
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={(e) => {
          setNumAllowed((prev) => !prev);
        }}
        ></input>
          <label htmlFor='numberInput'>Numbers</label>
        
      </div>
      <div className='flex items-center gap-x-1 text-white'>
        <input
        type='checkbox'
        defaultChecked={charAllowed}
        id='charInput'
        onChange={(e) => {
          setCharAllowed((prev) => !prev);
        }}
        ></input>
          <label htmlFor='charInput'>Characters</label>
        
      </div>

    </div>
    
    </div>
    </div>
  )
}

export default App
