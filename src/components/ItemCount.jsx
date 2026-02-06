import { useState } from "react"

export default function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1)

  function handleLess() {
    if (count > 1) setCount(count - 1)
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1)
  }

  return (
    <div>
      <div>
        <button onClick={handleLess}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}
