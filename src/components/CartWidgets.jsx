import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ position: "relative", cursor: "pointer" }}>
        🛒
        {getTotalQuantity() > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {getTotalQuantity()}
          </span>
        )}
      </div>
    </Link>
  )
}

export default CartWidget
