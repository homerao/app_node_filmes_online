const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class Language extends Model{}
Language.init( {
  language_id: {
    autoIncrement: true,
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.CHAR(20),
    allowNull: false
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  tableName: 'language',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "language_id" },
      ]
    },
  ]
})
module.exports = Language
