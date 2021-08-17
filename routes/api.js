const db = require('../models/Workout');
const router = require("express").Router();



// Get all workouts
router.get("/api/workouts/", (req, res) => {
    db.aggregate(
      [
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration"
            }
          }
        }
      ]
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

  router.put('/api/workouts/:id', (req, res) => {
      
  });



module.exports = router;