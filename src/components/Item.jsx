function Item(props) {
    console.log(props);
 return (
    <>
        <h3>{props.title}</h3>
        <img  width="200" src={props.img} alt={props.title} />
        <p>{props.price}</p>
        <p>{props.description}</p>
        <button>Ver Producto</button>
    </>
 )
}


export default Item;