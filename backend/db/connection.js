// db/connection.js
import mysql from 'mysql2';

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stockLexus',
});

conexion.connect(err => {
  if (err) {
    console.error('❌ Error de conexión: ', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

export default conexion;