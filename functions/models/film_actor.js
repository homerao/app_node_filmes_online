const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class FilmActor extends Model{}
FilmActor.init({
  actor_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'actor',
      key: 'actor_id'
    }
  },
  film_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'film',
      key: 'film_id'
    }
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  tableName: 'film_actor',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "actor_id" },
        { name: "film_id" },
      ]
    },
    {
      name: "idx_fk_film_id",
      using: "BTREE",
      fields: [
        { name: "film_id" },
      ]
    },
  ]
}
)
module.exports = FilmActor
 