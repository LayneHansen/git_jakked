var express = require("express");

var path = require("path");

var app = express();

var logger = require("morgan");

app.use(express.static(__dirname + "/Develop/public"));

// // Parse the request as JSON
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

var PORT = process.env.PORT || 3000;

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



app.post('/', (request, response) => {
    let test = request.body.test
    response.send("post working")
})


app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});