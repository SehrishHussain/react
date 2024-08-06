import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {

 // const [products, error, loading] = customReactQuery('/api/products')
  
 const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  
  useEffect (() => {
    //nextline is for reducing calling search fn everytime keyboard is typed.
    //and its part of powerful axios library
    const controller = new AbortController() //we have to send this controller with axios.get 
   //FIRST STEP: make controller
   
    //const prodctsstore = await axios.get('/api/products').then((res) => {})
    // we cant do it here cz we need to use async for await n cant use async in useEffect def so..We use Iffe (immediately invoked fns
    // ()() one parenthesis has fn def, one has fn call. They r called where declared)
    ;(async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal //SECOND STEP: send its signal
        })
        
        console.log("RESPonse: ",response.data);
        setProducts(response.data)
        setLoading(false);
      } catch (error) {
        //THID STEP: axios k request jo cancle he hai usko handle krna
        if (axios.isCancel(error)){
          console.log('Request cancelled', error.message)
          return //nothing return just exit
        }
        setError(true);
        setLoading(false);
        
      }
    })()

    //FORTH STEP: Every useEffect has return its called CLEANUP METHOD
    //the event handler is unmount here. Here components are unmounted. e.g: eventhandler on
   //i.e. the cleanup code
    return () => {
      controller.abort() // i.e comp unmount
    }
  },[search])

 

  // if (error) {
  //   return <h1>Something went wrong</h1>  //if error this code will run o.w return code
  // }

  // if (loading) {
  //   return <h1>Loading</h1>
  // }
  return ( //conditional rendering instead of returnS
    <>
      <h1>Chai aur API in React</h1>

      <input type="text" placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (<h1>Loading...</h1>)} 
      {error && (<h1>Somthing went wrong</h1>)}

      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App

// Some ppl take all the code and make a custom hook like given below
