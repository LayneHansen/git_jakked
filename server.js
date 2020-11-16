var express = require("express");
var app = express();
var logger = require("morgan");
var mongoose = require("mongoose");
// var path = require("path");
// var db = require("./models/index.js")

var PORT = process.env.PORT || 3000;


mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// listening

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});