import { useEffect, useState } from 'react';

const ProductoLista = () => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const res = await fetch('http://localhost:3000/api/productos');
    const data = await res.json();
    setProductos(data);
  };

  const eliminarProducto = async (id) => {
    await fetch(`http://localhost:3000/api/productos/${id}`, { method: 'DELETE' });
    cargarProductos();
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id_producto}>
            {p.nombre} - Cant: {p.cantidad} - $ {p.precio.toFixed(2)}{' '}
            <button onClick={() => eliminarProducto(p.id_producto)}>🗑️ Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoLista;
