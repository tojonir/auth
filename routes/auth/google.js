const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("auth google");
});

exports.google = route;
