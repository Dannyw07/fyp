const express = require("express");
const router = express.Router();
const { news } = require("../models");
// const bcrypt = require("bcrypt");

// const { sign } = require("jsonwebtoken");

//create news
router.post("/", async (req, res) => {
  const News = req.body;
  try {
    await news.create(News);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
