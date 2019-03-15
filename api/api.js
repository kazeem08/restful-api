const express = require("express");
const app = express();
const users = require("../users/users");
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.send(users);
});

module.exports = app;
