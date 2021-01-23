const app = require("express").Router();
const db = require("../models/exercise");

app.get("/workouts", (_req, res) => {
  db.find({}).then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
});


app.put("/workouts/:id", ({body, params}, res) => {
   db.findByIdAndUpdate(params.id, 
        { 
            $push: { 
                workouts: [
                    {
                name: body.name,
                type: body.type,
                weight: body.weight,
                sets: body.sets, 
                reps: body.reps,
                duration: body.duration, 
            }
        ]
    }})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });

});


app.post("/workouts", (req, res) => {
 db.create({})
     .then(data => {
       res.json(data);
     })
     .catch(err => {
       res.json(err);
     });

 });

app.get("/workouts/range", (req, res) => {
  db.find({}, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json(data);
    }
  });
});


module.exports = app;
