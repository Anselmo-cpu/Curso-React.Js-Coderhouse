import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getProducts } from "../services/firestoreProducts";

const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        let filtered = data;
        if (categoryId) {
          filtered = data.filter(
            (p) => p.category.toLowerCase() === categoryId.toLowerCase()
          );
        }
        setItems(filtered);
      })
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <section>
      <h2>{title}</h2>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ItemListContainer;
