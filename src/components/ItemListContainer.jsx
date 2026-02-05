import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"
import getData from "../data/mockService"

const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getData().then((data) => {
      if (categoryId) {
        setItems(data.filter((p) => p.category === categoryId))
      } else {
        setItems(data)
      }
    })
  }, [categoryId])

  return (
    <section>
      <h2>{title}</h2>

      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  )
}

export default ItemListContainer
