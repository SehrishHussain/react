
import './index.css'
import   ReactDOM  from 'react-dom/client'
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Channel from './components/channel' 
import Home from './components/Home'
import Shorts from './components/Shorts'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
    <Route path='/channel' element={<Channel/>} />
    <Route path='/shorts' element={<Shorts/>} />
    <Route path='home' element={<Home/>} />

    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router ={router}/>
    </Provider>
  </React.StrictMode>,
)
