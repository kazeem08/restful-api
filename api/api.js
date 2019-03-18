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
  //pushing the new user to the users array
  users.push(user);
  res.send(user);
});

//Updating an existing user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(eachUser => eachUser.id === parseInt(req.params.id));
  user.name === req.body.name;
  res.send(user);
});

//Delete a user
app.delete("/api/users/:id", (req, res) => {
  const user = users.find(eachUser => eachUser.id === parseInt(req.params.id));
  users.splice(users.indexOf(user), 1);
  res.send(user);
});

module.exports = app;
