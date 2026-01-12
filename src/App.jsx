
import './App.css'
import { useState } from 'react' 
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import products from './data/productos'



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="Bienvenido a Ansel Pedals" />
      <CartWidget />
      
    </>
  )
}



   


export default App
