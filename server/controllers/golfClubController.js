//create main Model

const { golfclub } = require("../models");

//create golfclub

const addGolfCourse = async (req, res) => {
  const golfClub = req.body;
  try {
    await golfclub.create(golfClub);
    res.json(golfClub);
  } catch (err) {
    res.json(err);
  }
};

//Get all golfclub from database

const getAllGolfCourse = async (req, res) => {
  try {
    const listOfGolfclubs = await golfclub.findAll();
    res.json(listOfGolfclubs);
  } catch (err) {
    res.json(err);
  }
};

//Get one golfclub from database

const getOneGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const findGolfclub = await golfclub.findByPk(id);
    res.json(findGolfclub);
  } catch (err) {
    res.json(err);
  }
};

const deleteGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    await golfclub.destroy({
      where: {
        gcId: id,
      },
    });
    res.json("Selected Golfclub has been deleted.");
  } catch (err) {
    res.json(err);
  }
};

const updateGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedgc = await golfclub.update({ where: { gcId: id } });
    res.status(200).send(updatedgc);
  } catch (err) {
    res.json(err);
  }
};
module.exports = {
  addGolfCourse,
  getAllGolfCourse,
  getOneGolfCourse,
  deleteGolfCourse,
  updateGolfCourse,
};
