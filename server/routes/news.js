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
    res.json(News);
  } catch (err) {
    res.json(err);
  }
});

//get all ponewsst
router.get("/", async (req, res) => {
  try {
    const listOfNews = await news.findAll();
    res.json(listOfNews);
  } catch (err) {
    req.json(err);
  }
});

//retrieve one particular news from database
router.get("/findBy/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const findNews = await news.findAll();
    res.json(findNews);
  } catch (err) {
    req.json(err);
  }
});

//delete one particular news from databasse
router.delete("/:news_id", async (req, res) => {
  const id = req.params.news_id;
  try {
    await news.destroy({
      where: {
        news_id: id,
      },
    });
    res.json("Selected Post has been deleted.");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
