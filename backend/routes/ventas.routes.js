import { Router } from 'express';
import {
  crearVenta,
  obtenerVentas,
  obtenerVentaPorId,
  actualizarVenta,
  eliminarVenta
} from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para crear una nueva venta
router.post('/', crearVenta);

// Ruta para obtener todas las ventas
router.get('/', obtenerVentas);

// Ruta para obtener una venta por ID
router.get('/:id', obtenerVentaPorId);

// Ruta para actualizar una venta
router.put('/:id', actualizarVenta);

// Ruta para eliminar una venta
router.delete('/:id', eliminarVenta);

export default router;
