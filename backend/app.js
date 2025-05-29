import express from 'express';
import cors from 'cors';
import conexion from './db/connection.js';
import productosRoutes from './routes/products.routes.js';
import ventasRoutes from './routes/ventas.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);

export default app;
