const express = require("express");
const {
  getAllExercises,
  postAddExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

router.get("/", getAllExercises);
router.post("/add", postAddExercise);

module.exports = router;
