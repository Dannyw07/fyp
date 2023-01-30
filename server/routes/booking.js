const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController.js");

//create booking
router.post("/addBooking", bookingController.addBooking);
//get all the booking info
router.get("/getAllBooking", bookingController.getAllBooking);
module.exports = router;
