const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { getSchedule } = require("./controllers/scheduleController");
const { validateLeague } = require("./middleware");

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/schedule", validateLeague, getSchedule);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
