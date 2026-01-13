import products from "../data/productos"
import Item from "./Item"
const ItemListContainer = (props) => {
    return (
        <section>
            <h2>{props.title}</h2>
        {
            products.map(( item ) => 
                (item) => <Item 
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                ></Item>
            ) 
        }
        
        </section>
    )
}

export default ItemListContainer