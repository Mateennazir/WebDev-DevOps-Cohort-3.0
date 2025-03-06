const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signed up",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signed in",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Signed in",
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "Signed in",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Signed in",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
