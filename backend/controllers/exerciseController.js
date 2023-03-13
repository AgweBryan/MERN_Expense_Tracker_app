const mongoose = require("mongoose");
const Exercise = require("../models/exerciseModel");

const getAllExercises = async (req, res) => {
  try {
    const excersis = await Exercise.find({});
    res.status(200).json(excersis);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const postAddExercise = async (req, res) => {
  const { username, description, duration, date } = req.body;
  try {
    const excersis = await Exercise.create({
      username,
      description,
      duration,
      date,
    });
    res.status(200).json(excersis);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const patchUpdateExcersise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such excercise" });
  }

  const excercise = await Exercise.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!excercise) {
    return res.status(400).json({ error: "No such excercise" });
  }

  res.status(200).json(excercise);
};

const deleteExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exercise" });
  }

  const exercise = await Exercise.findOneAndDelete({ _id: id });

  if (!exercise) {
    return res.status(400).json({ error: "No such exercise" });
  }

  res.status(200).json(exercise);
};

module.exports = {
  getAllExercises,
  postAddExercise,
  patchUpdateExcersise,
  deleteExercise,
};
