import Cart from './components/Cart'
import './App.css'
import Item from './components/Item'

function App() {



  return (
    <>
    <div className='App'>
      <Item name='Mac book' price={234}/>
      <Item name='Macipad' price={3455}/>
      <Item name='pendrice' price={788}/>
      <Cart/>
     
     </div>
    </>
  )
}

export default App
