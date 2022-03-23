const express = require("express");
const jwt = require("jsonwebtoken");
const { user } = require("../../defaults/models/models");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = new user({ email, password });
    await User.save();

    const token = jwt.sign({ userId: User._id }, "MY_SECRET_TOKEN");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  const user = await user.findOne({ email });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_TOKEN");

    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});

module.exports = router;
