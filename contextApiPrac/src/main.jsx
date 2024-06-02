import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(   //We are wrapping all components in contextProvider
  <React.StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
  </React.StrictMode>,
)
