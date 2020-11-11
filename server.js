var express = require("express");

var app = express();

var logger = require("morgan");

app.use(express.static("/Develop/public"));

// // Parse the request as JSON
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

var PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    console.log(__dirname + '/index.html')
    response.sendFile(__dirname + '/index.html')
})

// app.get('/', (request, response) => {
//     console.log(__dirname + '/exercise.html')
//     response.sendFile(__dirname + '/exercise.html')
// })

// app.get('/', (request, response) => {
//     console.log(__dirname + '/stats.html')
//     response.sendFile('/stats.html')
// })




app.post('/', (request, response) => {
    let test = request.body.test
    response.send("post working")
})




// // Set handlebars, declaring "main" and default
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give server access
// var router = require("./controllers/burgers_controller.js");

// app.use(router);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});