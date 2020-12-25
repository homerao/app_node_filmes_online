const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql');
const Film = require('./film');
class FilmCategory extends Model{}
FilmCategory.init({
  film_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'film',
      key: 'film_id'
    }
  },
  category_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'category',
      key: 'category_id'
    }
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize,
  tableName: 'film_category',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "film_id" },
        { name: "category_id" },
      ]
    },
    {
      name: "fk_film_category_category",
      using: "BTREE",
      fields: [
        { name: "category_id" },
      ]
    },
  ]
})

 module.exports = FilmCategory
