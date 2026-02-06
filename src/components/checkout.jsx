import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext)

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  })

  function handleChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Completa todos los campos")
      return
    }

    console.log("Orden generada:", {
      buyer,
      items: cart,
      total: totalPrice(),
    })

    alert("Compra realizada con éxito ✅")

    clearCart()
  }

  return (
    <section>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />

        <button type="submit">Confirmar compra</button>
      </form>
    </section>
  )
}

export default Checkout
