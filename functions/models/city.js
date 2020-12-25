const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class City extends Model{}
City.init({
  city_id: {
    autoIncrement: true,
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  country_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'country',
      key: 'country_id'
    }
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  tableName: 'city',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "city_id" },
      ]
    },
    {
      name: "idx_fk_country_id",
      using: "BTREE",
      fields: [
        { name: "country_id" },
      ]
    },
  ]
})

module.exports = City
