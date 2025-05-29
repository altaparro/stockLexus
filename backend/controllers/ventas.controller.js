import Ventas from '../models/ventas.model.js';

// Crear una venta
export const crearVenta = async (req, res) => {
  try {
    const { monto_total, fecha } = req.body;

    const nuevaVenta = await Ventas.create({
      monto_total,
      fecha
    });

    res.status(201).json(nuevaVenta);
  } catch (error) {
    console.error('Error al crear venta:', error);
    res.status(500).json({ mensaje: 'Error al crear la venta' });
  }
};

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Ventas.findAll();
    res.status(200).json(ventas);
  } catch (error) {
    console.error('Error al obtener ventas:', error);
    res.status(500).json({ mensaje: 'Error al obtener las ventas' });
  }
};

// Obtener una venta por ID
export const obtenerVentaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await Ventas.findByPk(id);

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    res.status(200).json(venta);
  } catch (error) {
    console.error('Error al obtener la venta:', error);
    res.status(500).json({ mensaje: 'Error al obtener la venta' });
  }
};

// Actualizar una venta
export const actualizarVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto_total, fecha } = req.body;

    const venta = await Ventas.findByPk(id);

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    await venta.update({ monto_total, fecha });

    res.status(200).json({ mensaje: 'Venta actualizada correctamente', venta });
  } catch (error) {
    console.error('Error al actualizar venta:', error);
    res.status(500).json({ mensaje: 'Error al actualizar la venta' });
  }
};

// Eliminar una venta
export const eliminarVenta = async (req, res) => {
  try {
    const { id } = req.params;

    const venta = await Ventas.findByPk(id);

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    await venta.destroy();

    res.status(200).json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar venta:', error);
    res.status(500).json({ mensaje: 'Error al eliminar la venta' });
  }
};
