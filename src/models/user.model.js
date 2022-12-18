const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    uid: String,
    firstname: String,
    lastname: String,
    email: String
  })
);
module.exports = User;
