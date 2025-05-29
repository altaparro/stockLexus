import { useState } from 'react';

const ProductoForm = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    cantidad: '',
    precio: ''
  });

  const handleChange = e => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
    const data = await res.json();
    console.log(data);
    alert('Producto agregado');
    setProducto({ nombre: '', cantidad: '', precio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} />
      <input name="cantidad" placeholder="Cantidad" value={producto.cantidad} onChange={handleChange} />
      <input name="precio" placeholder="Precio" value={producto.precio} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductoForm;
