const path = require("path");

module.exports = function(app) {

    app.get('/', (request, response) => {
        console.log(__dirname + './public')
        response.sendFile(path.join(__dirname + './public'));
    })

    app.get('/exercise', (request, response) => {
        console.log(__dirname + './public')
        response.sendFile(path.join(__dirname + './public'));
    })

    app.get('/stats', (request, response) => {
        console.log(__dirname + './public')
        response.sendFile(path.join(__dirname + './public'));
    })

}      