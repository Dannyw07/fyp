//create main Model

const { booking, sequelize } = require("../models");

//create available Time slot
const addTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    let data = {
      booking_id: id,
      reference_date: req.body.reference_date,
      booking_date: req.body.booking_date,
      booking_time: req.body.booking_time,
      price: req.body.price,
    };
    const timeSlot = await booking.create(data);
    res.status(200).send(timeSlot);
  } catch (err) {
    res.json(err);
  }
};
//Get all Time slot
const GetAllTimeSlot = async (req, res) => {
  try {
    const listOfTimeSlot = await booking.findAll({
      attributes: {
        include: [
          "booking_id",
          "reference_date",
          "booking_date",
          [
            sequelize.fn("DATE_FORMAT", sequelize.col("booking_time"), "%H:%i"),
            "booking_time",
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
    const findTimeSlot = await booking.findByPk(id);
    res.json(findTimeSlot);
  } catch (err) {
    res.json(err);
  }
};
//Delete one time slot
const DeleteOneTimeSlot = async (req, res) => {
  const id = req.params.id;
  try {
    await booking.destroy({
      where: {
        booking_id: id,
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
    const updatedts = await booking.update({ where: { booking_id: id } });
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
