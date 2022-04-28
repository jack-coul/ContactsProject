const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const importRoute = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  })
);
app.use(importRoute);

const port = 4000;
const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
  console.log("Соединение с монго установлено");

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
