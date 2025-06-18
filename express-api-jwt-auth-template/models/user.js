// models/user.js
const mongoose = require("mongoose");

const { model, Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  username: String,
  hashedPassword: String,
});
// Deletes the hash password before converting to JSON format
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

const User = model("User", userSchema);

module.exports = User;
