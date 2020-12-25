var DataTypes = require("sequelize").DataTypes;
var _actor = require("./actor");
var _address = require("./address");
var _category = require("./category");
var _city = require("./city");
var _country = require("./country");
var _customer = require("./customer");
var _film = require("./film");
var _film_actor = require("./film_actor");
var _film_category = require("./film_category");
var _film_text = require("./film_text");
var _inventory = require("./inventory");
var _language = require("./language");
var _payment = require("./payment");
var _rental = require("./rental");
var _staff = require("./staff");
var _store = require("./store");

function initModels(sequelize) {
  var actor = _actor(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var film = _film(sequelize, DataTypes);
  var film_actor = _film_actor(sequelize, DataTypes);
  var film_category = _film_category(sequelize, DataTypes);
  var film_text = _film_text(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var language = _language(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var rental = _rental(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);

  film.belongsToMany(actor, { through: film_actor, foreignKey: "film_id", otherKey: "actor_id" });
  actor.belongsToMany(film, { through: film_actor, foreignKey: "actor_id", otherKey: "film_id" });
  category.belongsToMany(film, { through: film_category, foreignKey: "category_id", otherKey: "film_id" });
  film.belongsToMany(category, { through: film_category, foreignKey: "film_id", otherKey: "category_id" });
  address.belongsTo(city, { foreignKey: "city_id"});
  city.hasMany(address, { foreignKey: "city_id"});
  city.belongsTo(country, { foreignKey: "country_id"});
  country.hasMany(city, { foreignKey: "country_id"});
  customer.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(customer, { foreignKey: "address_id"});
  customer.belongsTo(store, { foreignKey: "store_id"});
  store.hasMany(customer, { foreignKey: "store_id"});
  film.belongsTo(language, { foreignKey: "language_id"});
  language.hasMany(film, { foreignKey: "language_id"});
  film.belongsTo(language, { foreignKey: "original_language_id"});
  language.hasMany(film, { foreignKey: "original_language_id"});
  film_actor.belongsTo(actor, { foreignKey: "actor_id"});
  actor.hasMany(film_actor, { foreignKey: "actor_id"});
  film_actor.belongsTo(film, { foreignKey: "film_id"});
  film.hasMany(film_actor, { foreignKey: "film_id"});
  film_category.belongsTo(film, { foreignKey: "film_id"});
  film.hasMany(film_category, { foreignKey: "film_id"});
  film_category.belongsTo(category, { foreignKey: "category_id"});
  category.hasMany(film_category, { foreignKey: "category_id"});
  inventory.belongsTo(film, { foreignKey: "film_id"});
  film.hasMany(inventory, { foreignKey: "film_id"});
  inventory.belongsTo(store, { foreignKey: "store_id"});
  store.hasMany(inventory, { foreignKey: "store_id"});
  payment.belongsTo(customer, { foreignKey: "customer_id"});
  customer.hasMany(payment, { foreignKey: "customer_id"});
  payment.belongsTo(rental, { foreignKey: "rental_id"});
  rental.hasMany(payment, { foreignKey: "rental_id"});
  payment.belongsTo(staff, { foreignKey: "staff_id"});
  staff.hasMany(payment, { foreignKey: "staff_id"});
  rental.belongsTo(inventory, { foreignKey: "inventory_id"});
  inventory.hasMany(rental, { foreignKey: "inventory_id"});
  rental.belongsTo(customer, { foreignKey: "customer_id"});
  customer.hasMany(rental, { foreignKey: "customer_id"});
  rental.belongsTo(staff, { foreignKey: "staff_id"});
  staff.hasMany(rental, { foreignKey: "staff_id"});
  staff.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(staff, { foreignKey: "address_id"});
  staff.belongsTo(store, { foreignKey: "store_id"});
  store.hasMany(staff, { foreignKey: "store_id"});
  store.belongsTo(staff, { foreignKey: "manager_staff_id"});
  staff.hasOne(store, { foreignKey: "manager_staff_id"});
  store.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(store, { foreignKey: "address_id"});

  return {
    actor,
    address,
    category,
    city,
    country,
    customer,
    film,
    film_actor,
    film_category,
    film_text,
    inventory,
    language,
    payment,
    rental,
    staff,
    store,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
