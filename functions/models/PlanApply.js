const { DataTypes,Model } = require('sequelize');
const Sequelize = require('sequelize');
class PlanApplay extends Model {}
PlanApplay.init(
  {
    APPLY_ID: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CUSTOMER_ID: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customer_id'
      }
    },
    PLAN_ID: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'PLANS',
        key: 'PLAN_ID'
      }
    },
    AMOUNT: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    BEGIN_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    END_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PLAN_APPLY',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APPLY_ID" },
        ]
      },
      {
        name: "FK_APPLY_CUSTOMER",
        using: "BTREE",
        fields: [
          { name: "CUSTOMER_ID" },
        ]
      },
      {
        name: "FK_APPLY_PLANS",
        using: "BTREE",
        fields: [
          { name: "PLAN_ID" },
        ]
      },
    ]
  }
);

module.exports = PlanApplay