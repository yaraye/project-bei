var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Food.findAll({}).then(function(dbFoods) {
      res.render("index", {
        msg: "My Recipe!",
        foods: dbFoods
      });
    });
  });

  // Load food page and pass in an food by id
  app.get("/food/:id", function(req, res) {
    db.Food.findOne({ where: { id: req.params.id } }).then(function(dbFood) {
      res.render("food", {
        food: dbFood
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
