const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const requireAuth = require("./modules/middlewares/requireAuth");

//*Routes imports
const publicRoutes = require("./modules/defaults/routes/public-routes-index");
const protectedRoutes = require("./modules/defaults/routes/protected-routes-index");

//*Express instance
const app = express();

//*App Middlewares
app.use(bodyParser.json());

//*Public Routes
publicRoutes.forEach((r) => app.use(r));

//*Protected Routes
protectedRoutes.forEach((r) => app.use(r, requireAuth));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
