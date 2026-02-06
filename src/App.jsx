import Cart from "./components/Cart"
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Checkout from "./components/checkout"








function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer title="Bienvenido a Ansel Pedals" />} />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer title="Pedales M Vave" />}  />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />} />

        <Route 
          path="/cart" 
          element={<Cart />} />

        <Route
          path="*"
          element={
            <div>
              <h1>404 - Página no encontrada</h1>
              <Link to="/">Ir al inicio</Link>
            </div>} />

        <Route 
        path="/checkout" 
        element={<Checkout />} />


      </Routes>
    </BrowserRouter>
  )
}






   


export default App
