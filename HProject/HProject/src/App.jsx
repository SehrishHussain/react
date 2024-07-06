import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> A project with appwrite
    {console.log(import.meta.env.VITE_APPWRITE_URL)}
     
    </>
  )
}

export default App
