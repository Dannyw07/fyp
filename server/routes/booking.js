const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController.js");

//create time slot
router.post("/addTimeSlot", bookingController.addTimeSlot);
//get all time slot
router.get("/getAllTimeSlot", bookingController.GetAllTimeSlot);
//get one time slot
router.get("/getOneTimeSlot/findBy/:id", bookingController.GetOneTimeSlot);
//delete one time slot
router.delete("/findBy/:id", bookingController.DeleteOneTimeSlot);
//update one time slot
router.put("/findBy/:id", bookingController.updateTimeSlot);
module.exports = router;
