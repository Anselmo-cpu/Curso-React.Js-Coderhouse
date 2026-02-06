import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ id, title, price, quantity }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <h4>{title}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${Number(price * quantity).toLocaleString()}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
