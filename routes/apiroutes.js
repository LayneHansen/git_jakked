// const db = require("../models/index");

// module.exports = function(app) {
    
//     app.post('/exercise', (request, response) => {
//         let test = request.body.test
//         response.send("post working")
//     })

//     app.post('/stats', (request, response) => {
//         let test = request.body.test
//         response.send("post working")
//     })

//     app.post('/api/workouts', (request, response) => {
//         db.Workout.create({})
//         .then(dbworkout => {
//             response.json(dbworkout)
//         })
//     })

//     app.put('/api/workouts/:id', (request, response) => {
//         db.Workout.findByIdAndUpdate(request.params.id, {$push: {exercises: request.body}}, {new: true, runValidators: true})
//         .then(dbworkout => {
//             response.json(dbworkout)
//         })
//     })


// }