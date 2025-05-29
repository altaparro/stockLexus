import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('stockLexus', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // lo sacamos para que no escupa SQL en consola
});

export default sequelize;
