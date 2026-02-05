import { Link } from "react-router-dom";

export default function Item({ id, title, img, price })

{
  return (
    <div>
      <img src={img} alt={title} width="200" />
      <h3>{title}</h3>
      <p>${price}</p>

      <Link to={`/item/${id}`}>
          <button>Ver Producto</button>
      </Link>


    </div>
  )
}


