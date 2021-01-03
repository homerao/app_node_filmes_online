const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class Customer extends Model{}

Customer.init({
  customer_id: {
    autoIncrement: true,
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  store_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'store',
      key: 'store_id'
    }
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  address_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'address',
      key: 'address_id'
    }
  },
  active: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
    defaultValue: Sequelize.literal('12345')
  }
}, {
  sequelize,
  tableName: 'customer',
  hasTrigger: true,
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "customer_id" },
      ]
    },
    {
      name: "idx_fk_store_id",
      using: "BTREE",
      fields: [
        { name: "store_id" },
      ]
    },
    {
      name: "idx_fk_address_id",
      using: "BTREE",
      fields: [
        { name: "address_id" },
      ]
    },
    {
      name: "idx_last_name",
      using: "BTREE",
      fields: [
        { name: "last_name" },
      ]
    },
  ]
})

module.exports = Customer