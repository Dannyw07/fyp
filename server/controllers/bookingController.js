const { booking } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

//create booking
const addBooking = async (req, res) => {
  const id = req.params.id;
  try {
    let data = {
      booking_id: id,
      booking_date: req.body.reference_date,
      booking_time: req.body.booking_time,
      totalprice: req.body.totalprice,
    };
    const timeSlot = await booking.create(data);
    res.status(200).send(timeSlot);
  } catch (err) {
    res.json(err);
  }
};
//getAllBooking
const getAllBooking = async (req, res) => {
  try {
    const listOfBooking = await booking.findAll();
    res.json(listOfBooking);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  addBooking,
  getAllBooking,
};
