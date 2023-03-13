const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/error");

const itemsRoutes = require("./routes/items-routes");

const userRoutes = require("./routes/users-routes");

const app = express();

//to convert everything in a readable format before routing
app.use(bodyParser.json());

app.use("/lost-items", itemsRoutes);

app.use("/lost-items/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000);
