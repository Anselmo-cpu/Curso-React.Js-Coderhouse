import products from "../data/productos"
import Item from "./Item"


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
 