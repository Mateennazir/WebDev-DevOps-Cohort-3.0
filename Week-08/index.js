const express = require("express");
const app = express();
const port = 3000;

app.post("/user/signup", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.post("/user/login", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.get("/user/Purchases", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.post("/course/Purchase", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.get("/Courses", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(3000);
