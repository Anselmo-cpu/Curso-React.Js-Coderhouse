import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  function handleChange(e) {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        buyer,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(),
      });

      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al generar orden:", err);
      alert("Error al generar la orden");
    }
  }

  if (orderId)
    return (
      <section>
        <h2>Compra realizada con éxito ✅</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      </section>
    );

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
        <button type="submit">Confirmar compra</button>
      </form>
    </section>
  );
}

export default Checkout;
