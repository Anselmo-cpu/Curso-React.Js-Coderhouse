import products from "../data/productos"
import Item from "./Item"
import getData  from "../data/mockService"
import { data } from "react-router-dom"


const ItemListContainer = (props) => {

  return (
    <section>
      <h2>{props.title}</h2>

      {products.map((item) => (
        <Item
          key={item.id}
            {...item}
        />
      ))}
    </section>
  )
}

export default ItemListContainer
 