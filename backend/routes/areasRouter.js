const express = require("express");
const router = express.Router();
const areasQuery = require("../services/areasQuery.js");


router.get("/", async function (req, res, next) {
  try {
    res.json(await areasQuery.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;
