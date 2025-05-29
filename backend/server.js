import app from './app.js';
import sequelize from './db/connection.js';
import Producto from './models/products.model.js';

const PORT = 3000;

sequelize.sync({ alter: true }) // crea la tabla si no existe
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base:', err);
  });
