// Import express module
// let express = require('express');
// Create a new Router instance for user routes
// let router = express.Router();

// Import the Router object from the express module to create route handlers
const { Router } = require("express");

// Create a new instance of Router for defining user-related routes
const userRouter = Router();

// Import userModel, purchaseModel, and courseModel from the database folder to interact with user, purchase, and course data
const { userModel } = require("../db");

// Import userMiddleware to authenticate and authorize users before allowing access to routes
// const { userMiddleware } = require("../middleware/user");

// Import the JWT User Secret from the configuration file for signing JWT tokens
// const { JWT_USER_PASSWORD } = require("../config");

// Import necessary modules for handling JWT, password hashing, and schema validation
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Define a POST route for user signup
userRouter.post("/signup", async function (req, res) {
  // Define the schema for validating the request body data using zod
  const requireBody = zod.object({
    email: zod.string().email().min(5), // Email must be a valid email format with minimum 5 characters
    password: zod.string().min(5), // Password must be at least 5 characters long
    firstName: zod.string().min(3), // First name must be at least 3 characters long
    lastName: zod.string().min(3), // Last name must be at least 3 characters long
  });

  // Parse and validate the incoming request body data
  const parseDataWithSuccess = requireBody.safeParse(req.body);

  // If validation fails, return a 400 error with the validation error details
  if (!parseDataWithSuccess.success) {
    return res.json({
      message: "Incorrect data format",
      error: parseDataWithSuccess.error, // Provide details about the validation error
    });
  }

  // Extract validated email, password, firstName, and lastName from the request body
  const { email, password, firstName, lastName } = req.body;

  // Hash the user's password using bcrypt with a salt rounds of 10
  const hashedPassword = await bcrypt.hash(password, 10);

  // Try to create a new user in the database
  try {
    // Create a new user entry with the provided email, hashed password, firstName, and lastName
    await userModel.create({
      email,
      password: hashedPassword, // Store the hashed password instead of plain text
      firstName,
      lastName,
    });
  } catch (error) {
    // If there is an error during user creation, return a 400 error message
    return res.status(400).json({
      message: "You are already signup", // Provide a message indicating signup failure
    });
  }

  // Send a 201 success response back to the client indicating successful signup
  res.status(201).json({
    message: "Signup Successful!", // Success message upon successful signup
  });
});

// Export the userRouter so it can be imported and used in other parts of the application
module.exports = {
  userRouter: userRouter, // Export the router object for use in other modules
};
