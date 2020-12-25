const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class Country extends Model{}
Country.init({
  country_id: {
    autoIncrement: true,
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  tableName: 'country',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "country_id" },
      ]
    },
  ]
}) 

module.exports = Country
