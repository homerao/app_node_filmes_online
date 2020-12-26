
const {DataTypes, Model} = require('sequelize')
const Sequelize = require('sequelize');
const database = require('../database/mysql')
const sequelize = database
class Actor extends Model {}
Actor.init( {
    actor_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'actor',
    modelName:'Actor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "actor_id" },
        ]
      },
      {
        name: "idx_actor_last_name",
        using: "BTREE",
        fields: [
          { name: "last_name" },
        ]
      },
    ]
  });

  

module.exports =  Actor
