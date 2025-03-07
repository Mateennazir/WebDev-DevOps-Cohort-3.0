const { Schema, default: mongoose } = require("mongoose");
console.log("connected to ");
mongoose.connect(
  "mongodb+srv://muteebnazir8:CgboLRob8Wl9SXya@admin1.l34fi.mongodb.net/coursera-app"
);
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  Image: String,
  CreatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: String,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
