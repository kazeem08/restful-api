const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "kazeem" },
  { id: 2, name: "Dare" },
  { id: 3, name: "Stanley" }
];

app.get("/api/users", (req, res) => {
  res.send(users);
});

module.exports = app;
