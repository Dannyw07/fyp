const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  try {
    bcrypt.hash(password, 10).then((hash) => {
      users.create({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: hash,
      });
      res.json("Success boi");
    });
  } catch (err) {
    res.json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "The email or password entered is incorrect." });
  }

  // try {
  //   const user = await users.findOne({ where: { email: email } });
  //   if (!user) {
  //     res.send({ message: "User doesn't exist" });
  //     return res.status(422).json({ error: "User doesn't exist" });
  //   }
  // } catch (err) {
  //   console.log("Showing errors", err);
  // }

  const user = await users.findOne({ where: { email: email } });
  if (!user) res.json({ error: "User doesn't exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong email and password combination" });

    const accessToken = sign(
      {
        email: user.email,
        id: user.id,
      },
      "importantsecret"
    );
    res.json(accessToken);
  });
});

//get all users information
router.get("/", async (req, res) => {
  const getAllUsers = await users.findAll();
  res.json(getAllUsers);
});

module.exports = router;
