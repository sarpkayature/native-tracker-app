const mongoose = require("mongoose");
const userSchema = require("../../auth/models/User");
const trackSchema = require("../../track/models/Track");
const pointSchema = require("../../track/models/Point");

module.exports = {
  user: mongoose.model("User", userSchema),
  track: mongoose.model("Track", trackSchema),
  point: mongoose.model("Point", pointSchema),
};
