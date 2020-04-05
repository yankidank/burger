// Dependencies
// =============================================================
const { DataTypes } = require("sequelize"); // Import the built-in data types
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model 
var Burger = sequelize.define("burger", {
  // the name of the burger (a string)
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
