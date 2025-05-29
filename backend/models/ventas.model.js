import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Ventas = sequelize.define('Ventas', {
  id_ventas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  monto_total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
fecha: {
  type: DataTypes.DATE,
  allowNull: false,
  defaultValue: DataTypes.NOW
}
}, {
  tableName: 'ventas',
  timestamps: false
});

export default Ventas;
