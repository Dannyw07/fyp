const express = require("express");
const router = express.Router();

const availableTimeController = require("../controllers/availableTimeController");

//create time slot
router.post("/addTimeSlot", availableTimeController.addTimeSlot);
//get all time slot
router.get("/getAllTimeSlot", availableTimeController.GetAllTimeSlot);
//get one time slot
router.get(
  "/getOneTimeSlot/findBy/:id",
  availableTimeController.GetOneTimeSlot
);
//delete one time slot
router.delete("/findBy/:id", availableTimeController.DeleteOneTimeSlot);
//update one time slot
router.put("/findBy/:id", availableTimeController.updateTimeSlot);
module.exports = router;
