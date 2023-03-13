const express = require("express");
const {
  getAllExercises,
  postAddExercise,
  patchUpdateExcersise,
  deleteExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

router.get("/", getAllExercises);

router.post("/add", postAddExercise);

router.patch("/update/:id", patchUpdateExcersise);

router.delete("/delete/:id", deleteExercise);

module.exports = router;
