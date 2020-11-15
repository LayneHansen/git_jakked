var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var db = require("./models/index.js")

var PORT = process.env.PORT || 3000;

// var User = require("./Develop/seeders/seed.js")

var app = express();

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get routes

app.get('/', (request, response) => {
    console.log(__dirname + '/index.html')
    response.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/exercise', (request, response) => {
    console.log(__dirname + '/exercise.html')
    response.sendFile(path.join(__dirname, '/exercise.html'));
})

app.get('/stats', (request, response) => {
    console.log(__dirname + '/stats.html')
    response.sendFile(path.join(__dirname, '/stats.html'));
})

// post routes

app.post('/exercise', (request, response) => {
    let test = request.body.test
    response.send("post working")
})

app.post('/stats', (request, response) => {
    let test = request.body.test
    response.send("post working")
})

app.post('/api/workouts', (request, response) => {
    db.Workout.create({})
    .then(dbworkout => {
        response.json(dbworkout)
    })
})

app.put('/api/workouts/:id', (request, response) => {
    db.Workout.findByIdAndUpdate(request.params.id, {$push: {exercises: request.body}}, {new: true, runValidators: true})
    .then(dbworkout => {
        response.json(dbworkout)
    })
})



// listening

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});