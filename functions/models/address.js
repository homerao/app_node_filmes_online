const Sequelize = require('sequelize');
const { Model, DataTypes} = require('sequelize')
const database = require('../database/mysql')
const sequelize = new Sequelize('sakila', 'root', '12345', { host:'localhost', dialect:'mysql'})
class Address extends Model {}
Address.init(
  {
    address_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    city_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'city',
        key: 'city_id'
      }
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'address',
    modelName: 'Address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "idx_fk_city_id",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "idx_location",
        type: "SPATIAL",
        fields: [
          { name: "location", length: 32 },
        ]
      },
    ]
  }
)


module.exports = Address

  
