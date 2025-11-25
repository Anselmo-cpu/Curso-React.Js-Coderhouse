function Item(props) {
    const { title, img, price, description, handleClick } = props

 return (
    <>
        <h3>{title}</h3>
        <img  width="200" src={img} alt={title} />
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={handleClick}>Ver Producto</button>
    </>
 )
}




export default Item;