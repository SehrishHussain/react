import { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import './App.css'
import { useDispatch } from 'react-redux'
import {login, logout} from "./store/authSlice"
import { Header } from './components'
import { Footer } from './components'
import conf from './conf/conf'

function App() {
  console.log("ProjectID:",conf.appwriteProjectId)
 const [loading, setLoading] = useState(true)
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))

}, [])

  return (
    !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-red-400'>
        <div className='w-full block'>
          <Header/>
          <main>

          </main>
          <Footer/>
        </div>
      </div>
    ) : null
  )
}

export default App
