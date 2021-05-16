const { DataTypes,Model } = require('sequelize');
const Sequelize = require('sequelize');

class Plans extends Model {}

Plans.init({
  PLAN_ID: {
    autoIncrement: true,
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  PLAN_NAME: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  VALID: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  PLAN_PRICE: {
    type: DataTypes.DECIMAL(10,4),
    allowNull: true
  },
  CREATED_AT: {
    type: DataTypes.DATE,
    allowNull: true
  },
  UPDATED_AT: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'PLANS',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "PLAN_ID" },
      ]
    },
  ]
});

module.exports = Plans
