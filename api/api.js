const express = require("express");
const app = express();
const users = require("../users/users");
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.post("/api/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(user);
  res.send(user);
});

module.exports = app;
