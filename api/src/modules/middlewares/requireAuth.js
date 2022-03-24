const jwt = require("jsonwebtoken");
const { user } = require("../defaults/models/models");

const secret = process.env.TOKEN_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, secret, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }
    const { userId } = payload;
    req.user = await user.findById(userId);
    next();
  });
};
