const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/error");
const mongoose = require("mongoose");

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

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xrkkl.mongodb.net/items?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => console.log(error));
