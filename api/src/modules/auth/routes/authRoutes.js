const express = require("express");
const jwt = require("jsonwebtoken");
const { user } = require("../../defaults/models/models");

const router = express.Router();
const secret = process.env.TOKEN_SECRET;

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = new user({ email, password });
    await User.save();

    const token = jwt.sign({ userId: User._id }, secret);
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  const User = await user.findOne({ email });

  try {
    await User.comparePassword(password);
    const token = jwt.sign({ userId: User._id }, secret);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});

module.exports = router;
