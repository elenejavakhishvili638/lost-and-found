const express = require("express");
const bodyParser = require("body-parser");

const itemsRoutes = require("./routes/items-routes");

const app = express();

app.use("/lost-items", itemsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000);
