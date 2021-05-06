const { DataTypes, NOW } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: NOW
    }
  }, {
    tableName: 'users'
  });