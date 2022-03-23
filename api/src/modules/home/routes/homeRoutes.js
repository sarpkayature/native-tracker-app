const express = require("express");
const router = express.Router();
const requireAuth = require("../../middlewares/requireAuth");

router.get("/", requireAuth, (req, res) => {
  res.send(`hello:${req.user.email}`);
});

module.exports = router;
