const mongoose = require("mongoose");
const userSchema = require("../../auth/models/User");
const trackSchema = require("../../track/models/Track");

module.exports = {
  user: mongoose.model("User", userSchema),
  track: mongoose.model("Track", trackSchema),
};
