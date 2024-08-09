import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("ERROR: ", error);

    })
  }, [])

  return (
    <>
      <h1>Chai n fullstack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => ( // curly barckets k ley return use krna parta thats why use round
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
