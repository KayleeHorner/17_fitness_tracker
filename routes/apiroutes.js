const app = require("express").Router();
const db = require("../models/exercise");

app.get("/workouts", (_req, res) => {
  db.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, {
    $push: {
      exercises: body,
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

app.post("/workouts", (req, res) => {
  db.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/workouts/range", (req, res) => {
  db.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = app;
