import Producto from '../models/products.model.js';

// Crear un producto nuevo
export const crearProducto = async (req, res) => {
  try {
    const { nombre, cantidad, precio } = req.body;

    if (!nombre || cantidad == null || precio == null) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const nuevoProducto = await Producto.create({ nombre, cantidad, precio });
    res.status(201).json(nuevoProducto);
    console.log("PRODUCTO CREADO:");
  } catch (error) {
    console.error('❌ Error al crear producto:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Editar un producto existente
export const editarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cantidad, precio } = req.body;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    producto.nombre = nombre ?? producto.nombre;
    producto.cantidad = cantidad ?? producto.cantidad;
    producto.precio = precio ?? producto.precio;

    await producto.save();

    res.json(producto);
  } catch (error) {
    console.error('❌ Error al editar producto:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};


export const obtenerProductos = async (req, res) => {
  try {
    console.log('📥 GET /api/productos recibido');

    const productos = await Producto.findAll();

    res.json(productos);
  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await producto.destroy();
    res.json({ mensaje: '✅ Producto eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al borrar producto:', error);
    res.status(500).json({ error: 'Error al borrar producto' });
  }
};