var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var Food = require("models/food.js");

// Get all recipes database and render on page.
router.get("/", function(req, res) {
  Food.selectAll(function(data) {
    var hbsObject = {
      food: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post new recipe to database and refesh page to see it.
router.post("/recipes", function(req, res) {
  Food.insertOne([
    "name", "dish", "ingredients", "instruction"
  ], [
    req.body.name, req.body.dish, req.body.ingredients, req.body.instruction
  ], function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;