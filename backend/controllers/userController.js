const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const postAddUser = async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = await User.create({ username });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getAllUsers, postAddUser };
