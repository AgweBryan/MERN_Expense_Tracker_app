const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const exerciseRoutes = require("./routes/exercise");
const userRoutes = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/exercises", exerciseRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((_) => {
    app.listen(process.env.PORT, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.log(err));
