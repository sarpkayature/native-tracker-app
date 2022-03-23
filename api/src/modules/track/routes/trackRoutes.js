const express = require("express");
const { track } = require("../../defaults/models/models");

const router = express.Router();

router.get("/tracks", async (req, res) => {
  const userId = req.user._id;
  const tracks = await track.find({ userId });
  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const userId = req.user._id;

  const { name, locations } = req.body;

  if (!name || !locations) {
    res.status(422).send({ error: "You must provide name & locations" });
  }
  try {
    const Track = new track({ name, locations, userId });
    await Track.save();
    return res.send(Track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
