var db = require("../models");

const bcrypt = require('bcrypt');


module.exports = function (app) {
    // Get all foods
    app.get("/api/foods", function (req, res) {
        db.Food.findAll({}).then(function (dbFoods) {
            res.json(dbFoods);
        });
    });


    // Create a new food
    app.post("/api/foods", function (req, res) {
        db.Food.create(req.body).then(function (dbFood) {
            res.json(dbFood);
        });
    });

    // Delete an food by id
    app.delete("/api/foods/:id", function (req, res) {
        db.Food.destroy({where: {id: req.params.id}}).then(function (dbFood) {
            res.json(dbFood);
        });
    });

    //get sign up page

    app.get("/signup", function (req, res) {
        res.render("signup");
    });



//Get Login page

    app.get("/login", function (req, res) {
        res.render("login");
    });

    app.get("/memorygame", function (req, res) {
        res.render("memorygame");
    });




    app.get("/videos", function (req, res) {

        db.YouTube.findAll().then(videos => {
            res.render("videos", {videos});
        });


    });

    app.get("/recipes", function (req, res) {

        db.Food.findAll().then(foods => {
            console.log(foods);
            res.render("recipes", {foods});
        });


    });

    app.get("/games", function (req, res) {
        res.render("games");
    });


//login user and check hash
    app.post("/loginuser", function (req, resp) {

        //create hash

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            db.login.findOne({where: {username: req.body.username}}).then(function (result) {


                bcrypt.compare(req.body.password, hash, function (err, res) {
                    if (res) {
                        resp.json("Correct");
                    } else {
                        resp.json("In Correct");
                    }
                });

            })

        });

    });

    //sign up page

    app.post("/createuser", function (req, res) {
        console.log("Creating");
        //create user and hash
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            db.login.create({
                username: req.body.username,
                password: hash
            }).then(function (dbTodo) {

                res.json(dbTodo);
            }).catch(function (err) {
                console.log(err);
                res.json(err);
            });

        });
    });
};



