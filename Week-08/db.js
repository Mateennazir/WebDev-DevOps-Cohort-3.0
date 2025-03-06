const { Schema, default: mongoose } = require("mongoose");
mongoose.connect("");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = Schema({
  title: String,
  description: String,
  price: Number,
  Image: String,
  CreatorId: ObjectId,
});

const purchaseSchema = Schema({
  userId: String,
  courseId: ObjectId,
});

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.export = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
