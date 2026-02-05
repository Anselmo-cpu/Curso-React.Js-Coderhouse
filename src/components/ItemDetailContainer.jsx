import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getData from "../data/mockService"
import ItemCount from "./ItemCount"

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getData().then((data) => {
      const found = data.find((p) => p.id === Number(itemId))
      setProduct(found)
    })
  }, [itemId])

  if (!product) return <p>Cargando...</p>

  return (
    <section>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} width="300" />
      <p>{product.description}</p>
      <h4>Precio: ${product.price}</h4>
      <ItemCount />
    </section>
  )
}

export default ItemDetailContainer
