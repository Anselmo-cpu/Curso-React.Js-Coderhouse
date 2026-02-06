import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"



function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <section>
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>Carrito</h2>

      {cart.map(item => (
        <CartItem key={item.id} {...item} />
      ))}

      <h3>Total: ${totalPrice()}</h3>

        <Link to="/checkout">
            <button>Finalizar compra</button>
        </Link>


      <button onClick={clearCart}>Vaciar carrito</button>
    </section>
  )
}

export default Cart
