var express = require("express");
var path = require("path");
var app = express();
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("./models/index.js")

var PORT = process.env.PORT || 3000;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(logger("dev"));
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiroutes.js")(app);
// require("./routes/html.js")(app);

app.get('/', (request, response) => {
    console.log(__dirname + '/public')
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/exercise', (request, response) => {
    console.log(__dirname + '/public')
    response.sendFile(path.join(__dirname + '/exercise.html'));
})

app.get('/stats', (request, response) => {
    console.log(__dirname + '/public')
    response.sendFile(path.join(__dirname + '/stats.html'));
});

app.post('/exercise', (request, response) => {
    let test = request.body.test
    response.send("post working")
})

app.post('/stats', (request, response) => {
    let test = request.body.test
    response.send("post working")
})

app.get('/api/workouts', ({ body }, response) => {
    db.Workout.find({}).then(dbWorkout => {
        response.json(dbWorkout)
    })
})

app.post('/api/workouts', ({ body }, response) => {
    db.Workout.create(body).then(dbWorkout => {
        response.json(dbWorkout)
    })
})

app.get('/api/workouts/range', ({ body }, response) => {
    db.Workout.find({}).limit(7).then(dbWorkout => {
        response.json(dbWorkout)
    })
})

app.put('/api/workouts/:id', (request, response) => {
    console.log(request.params.id, request.body, "test")
    db.Workout.findByIdAndUpdate(request.params.id,
        {
            $inc: { totalDuration: request.body.duration },
            $push: { exercises: request.body }
        },

        { new: true }).then(dbworkout => {
            console.log(dbworkout, "tagged")
            response.json(dbworkout);
        }).catch(err => {
            console.log(err);
            response.json(err);
        });
});


// listening
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});