import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'productos',
  timestamps: false
});

export default Producto;