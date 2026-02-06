import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import getData from "../data/mockService"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"



function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  const { addItem } = useContext(CartContext)
  const [added, setAdded] = useState(false)
  
 


  useEffect(() => {
    getData().then((data) => {
      const found = data.find((p) => p.id === Number(itemId))
      setProduct(found)
    })
  }, [itemId])


  function handleAddToCart(quantity) {
  addItem(product, quantity)
  setAdded(true)
    }


  if (!product) return <p>Cargando...</p>

  return (
    <section>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} width="300" />
      <p>{product.description}</p>
      <h4>Precio: ${product.price}</h4>

            {!added ? (
        <ItemCount
            stock={product.stock}
            onAdd={handleAddToCart}
        />
        ) : (
        <Link to="/cart">
            <button>Ir al carrito</button>
        </Link>
        )}

    </section>



  )
}

export default ItemDetailContainer
