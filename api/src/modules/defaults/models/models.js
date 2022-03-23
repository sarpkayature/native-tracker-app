const mongoose = require("mongoose");
const userSchema = require("../../auth/models/User");

module.exports = {
  user: mongoose.model("User", userSchema),
};
