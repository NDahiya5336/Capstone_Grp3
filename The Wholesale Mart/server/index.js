const express = require("express");
const cors = require("cors");

require("colors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}`)
);
