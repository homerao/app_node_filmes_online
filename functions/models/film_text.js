const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql')
class FilmText extends Model{}
FilmText.init({
  film_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'film_text',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "film_id" },
      ]
    },
    {
      name: "idx_title_description",
      type: "FULLTEXT",
      fields: [
        { name: "title" },
        { name: "description" },
      ]
    },
  ]
}) 

module.exports = FilmText