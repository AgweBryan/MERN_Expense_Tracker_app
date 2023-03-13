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

module.exports = { getAllExercises, postAddExercise };
