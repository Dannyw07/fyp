//create main Model

const { aTime, sequelize } = require("../models");

//create available Time slot
const addTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    let data = {
      aTime_id: id,
      reference_date: req.body.reference_date,
      aTime_date: req.body.aTime_date,
      aTime_time: req.body.aTime_time,
      price: req.body.price,
    };
    const timeSlot = await aTime.create(data);
    res.status(200).send(timeSlot);
  } catch (err) {
    res.json(err);
  }
};
//Get all Time slot
const GetAllTimeSlot = async (req, res) => {
  try {
    const listOfTimeSlot = await aTime.findAll({
      attributes: {
        include: [
          "aTime_id",
          "reference_date",
          "aTime_date",
          [
            sequelize.fn("DATE_FORMAT", sequelize.col("aTime_time"), "%H:%i"),
            "aTime_time",
          ],
          "price",
        ],
      },
    });
    res.json(listOfTimeSlot);
  } catch (err) {
    res.json(err);
  }
};

//Get one Time slot
const GetOneTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    const findTimeSlot = await aTime.findByPk(id);
    res.json(findTimeSlot);
  } catch (err) {
    res.json(err);
  }
};
//Delete one time slot
const DeleteOneTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    await aTime.destroy({
      where: {
        aTime_id: id,
      },
    });
    res.json("Selected TimeSlot has been deleted.");
  } catch (err) {
    res.json(err);
  }
};
//update time slot
const updateTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedts = await aTime.update({ where: { aTime_id: id } });
    res.status(200).send(updatedts);
  } catch (err) {
    res.json(err);
  }
};
module.exports = {
  addTimeSlot,
  GetAllTimeSlot,
  GetOneTimeSlot,
  DeleteOneTimeSlot,
  updateTimeSlot,
};
