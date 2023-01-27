const { users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

//create user

const register = async (req, res) => {
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
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "The email or password entered is incorrect." });
  }
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
};

const getUser = async (req, res) => {
  const getAllUsers = await users.findAll();
  res.json(getAllUsers);
};
module.exports = {
  register,
  login,
  getUser,
};
