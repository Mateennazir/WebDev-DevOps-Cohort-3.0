const { Router } = require("express");

const courseRouter = Router();

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

module.exports = {
  courseRouter: courseRouter,
};
