
import   ReactDOM  from 'react-dom/client'
import React from 'react'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import RandomJokes from './components/RandomJokes'
import RandomProduct from './components/product/RandomProduct'
import ProductDetail from './components/product/ProductDetail'
import {Provider} from 'react-redux';
import {store} from './components/store/store'
//import YouTube from './components/youtube'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    < Route path='home' element={<Home/>}/>
    <Route path='/randomjokes' element={<RandomJokes/>}/>
    <Route path='/randomproducts' element={<RandomProduct/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
    

    
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)
