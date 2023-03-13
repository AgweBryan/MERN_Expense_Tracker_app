const express = require("express");
const { getAllUsers, postAddUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/add", postAddUser);

module.exports = router;
