import express from 'express';
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.put('/:id', editarProducto); 
router.delete('/:id', borrarProducto);
export default router; 
