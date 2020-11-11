var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

// Parse the request as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars, declaring "main" and default
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give server access
var router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});