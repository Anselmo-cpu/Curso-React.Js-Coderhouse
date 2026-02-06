import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(item, quantity) {
    const existingItem = cart.find(p => p.id === item.id)

    if (existingItem) {
      setCart(
        cart.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        )
      )
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  function getTotalQuantity() {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  function clearCart() {
    setCart([])
  }

  function totalPrice() {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

function removeItem(id) {
  setCart(cart.filter(item => item.id !== id))
}

    

  return (
    <CartContext.Provider value={{cart,addItem,getTotalQuantity,clearCart,totalPrice, removeItem}} >
      {children}
    </CartContext.Provider>
  )
}



