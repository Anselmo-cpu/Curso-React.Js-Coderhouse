export default function Item({ title, img, price })

{
  return (
    <div>
      <img src={img} alt={title} width="200" />
      <h3>{title}</h3>
      <p>${price}</p>
       <button>Ver Producto</button>
    </div>
  )
}
