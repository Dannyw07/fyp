const express = require("express");
const router = express.Router();
const { golfclub } = require("../models");
// const Golfclub = require("../models/Golfclub");
const golfClubController = require("../controllers/golfClubController.js");

// create golfclub
// router.post("/", async (req, res) => {
//   const golfClub = req.body;
//   try {
//     await golfclub.create(golfClub);
//     res.json(golfClub);
//   } catch (err) {
//     res.json(err);
//   }
// });

router.post("/", golfClubController.addGolfCourse);

// get all golfclubs from database
// router.get("/", async (req, res) => {
//   //   const listOfGolfclubs = await golfclub.findAll();
//   //   res.json(listOfGolfclubs);
//   try {
//     const listOfGolfclubs = await golfclub.findAll();
//     res.json(listOfGolfclubs);
//   } catch (err) {
//     res.json(err);
//   }
// });
// get all golfclubs from database//
router.get("/", golfClubController.getAllGolfCourse);

// get one golfclub from database
// router.get("/findBy/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const findGolfclub = await golfclub.findByPk(id);
//     res.json(findGolfclub);
//   } catch (err) {
//     res.json(err);
//   }
// });
router.get("/findBy/:id", golfClubController.getOneGolfCourse);

// delete one golf club from database
// router.delete("/:gcId", async (req, res) => {
//   const id = req.params.gcId;

//   //   await golfclub.destroy({
//   //     where: {
//   //       gcId: id,
//   //     },
//   //   });
//   //   res.json("Selected Golfclub has been deleted.");

//   try {
//     await golfclub.destroy({
//       where: {
//         gcId: id,
//       },
//     });
//     res.json("Selected Golfclub has been deleted.");
//   } catch (err) {
//     res.json(err);
//   }
// });
router.delete("/findBy/:id", golfClubController.deleteGolfCourse);

//update one golf club information
router.put("/findBy/:id", golfClubController.updateGolfCourse);
module.exports = router;
