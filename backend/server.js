const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
