const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("./modules/auth/models/User");

//*Routes imports
const publicRoutes = require("./modules/defaults/routes/public-routes-index");
const protectedRoutes = require("./modules/defaults/routes/protected-routes-index");

//*App Middlewares
const app = express();
app.use(bodyParser.json());

//*Public Routes
publicRoutes.forEach((r) => app.use(r));

//*Protected Routes
protectedRoutes.forEach((r) => app.use(r));

//TODO: AUTO REGISTER MODELS

//*MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
