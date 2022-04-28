const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const importRoute = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(importRoute);

const port = 4000;
const url = "mongodb+srv://jackcoul:1558@cluster0.rbezt.mongodb.net/contacts";

mongoose.connect(url).then(() => {
  console.log("Соединение с монго установлено");

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
