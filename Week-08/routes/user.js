// const express = require("expresss");
// const Router = express.Router;

const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

userRouter.post("/Signin", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

userRouter.get("/Purchases", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

module.exports = {
  userRouter: userRouter,
};
