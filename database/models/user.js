const { DataTypes, NOW } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employee_Id: {
      type: DataTypes.INET,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: NOW
    },
    deleted_at: {
      type: DataTypes.DATE,
      defaultValue: NOW
    }
  }, {
    tableName: 'users'
  });