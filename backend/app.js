const express = require("express");

const dotenv = require("dotenv");

const todos = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send(todos);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const new_data = todos.find((item) => item.id == id);
  res.send(new_data);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server running at port http://localhost:${PORT}`);
});
