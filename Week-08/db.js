const { Schema, default: mongoose } = require("mongoose");

const userSchema = Schema({
  email: { type: String, unique: true },
  password: String,
});

const adminSchema = Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  name: String,
});

const purchaseSchema = Schema({});

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);
