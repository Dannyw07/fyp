const express = require("express");
const router = express.Router();
const { users } = require("../models");

const userController = require("../controllers/userController.js");

//register
router.post("/register", userController.register);
// router.post("/register", async (req, res) => {
//   const { firstName, lastName, phoneNumber, email, password } = req.body;
//   try {
//     bcrypt.hash(password, 10).then((hash) => {
//       users.create({
//         firstName: firstName,
//         lastName: lastName,
//         phoneNumber: phoneNumber,
//         email: email,
//         password: hash,
//       });
//       res.json("Success boi");
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

//login
router.post("/login", userController.login);
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res
//       .status(422)
//       .json({ error: "The email or password entered is incorrect." });
//   }
//   const user = await users.findOne({ where: { email: email } });
//   if (!user) res.json({ error: "User doesn't exist" });

//   bcrypt.compare(password, user.password).then((match) => {
//     if (!match) res.json({ error: "Wrong email and password combination" });

//     const accessToken = sign(
//       {
//         email: user.email,
//         id: user.id,
//       },
//       "importantsecret"
//     );
//     res.json(accessToken);
//   });
// });

//get all users information
router.post("/", userController.getUser);
// router.get("/", async (req, res) => {
//   const getAllUsers = await users.findAll();
//   res.json(getAllUsers);
// });

module.exports = router;
