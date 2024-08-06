import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {

  const [products, error, loading] = customReactQuery('/api/products')
  
  if (error) {
    return <h1>Something went wrong</h1>  //if error this code will run o.w return code
  }

  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <h1>Chai aur API in React</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App

// Some ppl take all the code and make a custom hook like given below
const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect (() => {
   //const prodctsstore = await axios.get('/api/products').then((res) => {})
    // we cant do it here cz we need to use async for await n cant use async in useEffect def so..We use Iffe (immediately invoked fns
    // ()() one parenthesis has fn def, one has fn call. They r called where declared)
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(urlPath)
        console.log("RESPonse: ",response.data);
        setProducts(response.data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        
      }
    })()
  },[])

 return [products, error, loading];

}