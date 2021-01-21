const app = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

app.get("/api/workouts", (req, res) => {
    db.find({}, (error, result) => {
        if (error) {
          res.send(error);
        } else {
          res.send(result);
        }
      });
});

app.put("/api/workouts/:id", ({body, params}, res) => {
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


app.post("/api/workouts", (req, res) => {
 db.create({})
     .then(data => {
       res.json(data);
     })
     .catch(err => {
       res.json(err);
     });

 });

app.get("/api/workouts/range", (req, res) => {
  db.find({}, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

// app.post("/submit", (req, res) => {
//   console.log(req.body);

//   db.notes.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.get("/find/:id", (req, res) => {
//   db.notes.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.post("/update/:id", (req, res) => {
//   db.notes.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   db.notes.remove(
//     {
//       _id: mongojs.ObjectID(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/clearall", (req, res) => {
//   db.notes.remove({}, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(response);
//     }
//   });
// });

// db.Library.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/submit", ({body}, res) => {
//   db.Book.create(body)
//     .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });




module.exports = app;
