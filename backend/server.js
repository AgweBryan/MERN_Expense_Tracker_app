const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((_) => {
    app.listen(process.env.PORT, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.log(err));
