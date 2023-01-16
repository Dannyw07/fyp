const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());

//Router
const contactUsRouter = require("./routes/contactUs");
app.use("/contactUs", contactUsRouter);

const usersRouter = require("./routes/users");
app.use("/auth", usersRouter);

const golfClubsRouter = require("./routes/golfclub");
app.use("/golfclubs", golfClubsRouter);

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
});
