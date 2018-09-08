//check username password when logging in

$(".submitlogin").on("click", function (event) {
    event.preventDefault();

    var Info = {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()

    };

    console.log(Info);

    $.ajax("/loginuser", {
        type: "POST",
        data: Info

    }).then(
        function (data) {
            window.location = "/";
        })
});

//sign up user

$(".submitsignup").on("click", function (event) {
    event.preventDefault();

    var Info = {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()

    };

    $.ajax("/createuser", {
        type: "POST",
        data: Info

    }).then(
        function (data) {
            window.location = "/login";
        })
});
// Get references to page elements
var $foodName = $("#food-name");
var $foodDish = $("#food-dish");
var $foodIngredients = $("#food-ingredients");
var $foodInstruction = $("#food-instruction");
var $submitBtn = $("#addRecipeButton");
var $foodList = $("#food-list");

// The API object contains methods for each kind of request we'll make
var API = {
    saveFood: function (food) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/foods",
            data: JSON.stringify(food)
        });
    },
    getFoods: function () {
        return $.ajax({
            url: "api/foods",
            type: "GET"
        });
    },
    deleteFood: function (id) {
        return $.ajax({
            url: "api/foods/" + id,
            type: "DELETE"
        });
    }
};

// refreshfoods gets new foods from the db and repopulates the list
var refreshFoods = function () {
    API.getFoods().then(function (data) {
        var $foods = data.map(function (food) {
            var $a = $("<a>")
                .text(food.name)
                .attr("href", "/food/" + food.id);

            var $li = $("<li>")
                .attr({
                    class: "list-group-item",
                    "data-id": food.id
                })
                .append($a);

            var $button = $("<button style=\"margin-left:25px;\">")
                .addClass("btn btn-danger float-right delete")

                .text("ｘ");

            $li.append($button);

            return $li;
        });

        $foodList.empty();
        $foodList.append($foods);
    });
};

// handleFormSubmit is called whenever we submit a new food
// Save the new food to the db and refresh the list
var handleFormSubmit = function (event) {
    event.preventDefault();

    var food = {
        name: $foodName.val().trim(),
        dish: $foodDish.val().trim(),
        ingredients: $foodIngredients.val().trim(),
        instruction: $foodInstruction.val().trim()
    };
    console.log(food);

    if (!(food.name && food.dish && food.ingredients)) {
        console.log('please fill all the forms')
        return;
    }

    API.saveFood(food).then(function () {
        refreshFoods();
    });

    $foodName.val(" ");
    $foodDish.val(" ");
    $foodIngredients.val(" ");
    $foodInstruction.val(" ");
};

// handleDeleteBtnClick is called when an food's delete button is clicked
// Remove the food from the db and refresh the list
var handleDeleteBtnClick = function () {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteFood(idToDelete).then(function () {
        refreshFoods();
    });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$foodList.on("click", ".delete", handleDeleteBtnClick);

