
import './App.css'
import { useState } from 'react' 
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <CartWidget />
    </>
  )
}



   


export default App
