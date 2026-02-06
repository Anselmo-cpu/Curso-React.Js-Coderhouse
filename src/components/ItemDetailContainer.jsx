import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/firestoreProducts";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        const found = data.find((p) => p.id.toString() === itemId); // id consistente
        setProduct(found || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  function handleAddToCart(quantity) {
    addItem(product, quantity);
    setAdded(true);
  }

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>Precio: ${Number(product.price).toLocaleString()}</p>
      <p>Stock disponible: {product.stock}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAddToCart} />
      ) : (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      )}
    </section>
  );
}

export default ItemDetailContainer;
