const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Mateenchowdhary@123";

const app = express();

const users = [];

//We need to right this line of code because we are using req.body middleware. This lets us extract the json body from the req.body

app.use(express.json());

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  //we should check if a user with this usernmae already exists because we are not storing the data in the database right now
  res.json({
    message: "You are signed in",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }
  if (!foundUser) {
    res.json({
      message: " Credentials incorrect",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  }
});

app.get("/me", function (req, res) {});

app.listen(3000);
