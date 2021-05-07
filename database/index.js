const { Sequelize } = require('sequelize');
const { DATABASE_URL } = require('../config');

const userModel = require('./models/user');

const sequelize = new Sequelize(DATABASE_URL);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
})

const User = userModel(sequelize);

module.exports = {
  sequelize,
  models: {
    User
  }
}