// Dependencies
// =============================================================
var Burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Return all burgers
  app.get("/api/all", function(req, res) {
    Burger.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Search for Specific Burger 
  app.delete("/api/:burgers?", function(req, res) {
    Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });

  // If a user sends data to add a new burger...
  app.post("/api/new", function(req, res) {
    var burger = req.body;

    // Add the burger to the database using sequelize
    Burger.create({
      name: burger.name
    });
    //res.redirect("/");
    res.status(204).end();
  });
};
