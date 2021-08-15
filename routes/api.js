const db = require("../models/Workout");
const router = require("express").Router();

// Get last workout
router.get("/api/workouts", (req, res) => {
    console.log("inside Get last workout")
});




module.exports = router;