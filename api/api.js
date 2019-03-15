const express = require("express");
const app = express();
const users = require("../users/users");
app.use(express.json());

//Getting the users
app.get("/api/users", (req, res) => {
  res.send(users);
});

//Creating a new user
app.post("/api/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(user);
  res.send(user);
});

//Updating an existing user
app.put("/api/courses/:id", (req, res) => {
  const user = users.find(eachUser.id === parseInt(req.param.id));
  user.name === req.body.name;
  res.send(user);
});

module.exports = app;
