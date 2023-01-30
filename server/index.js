//newly added
////////////////////////////////////////////////////
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@admin-bro/sequelize");

///////////////////////////////////////////////////
const express = require("express");
const db = require("./models");
AdminJS.registerAdapter(AdminJSSequelize);
const PORT = 4000;

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};
const startAdminJS = async () => {
  const app = express();

  const admin = new AdminJS({
    databases: [db],
    rootPath: "/admin",
  });

  const cors = require("cors");
  const nodemailer = require("nodemailer");

  app.use(express.json());
  app.use(cors());

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  //Router
  const contactUsRouter = require("./routes/contactUs");
  app.use("/contactUs", contactUsRouter);

  const usersRouter = require("./routes/users");
  app.use("/auth", usersRouter);

  const golfClubsRouter = require("./routes/golfclub");
  app.use("/golfclubs", golfClubsRouter);

  const AtimeRouter = require("./routes/availableTime");
  app.use("/golfclubs/AvailableSlot", AtimeRouter);

  const NewsRouter = require("./routes/news");
  app.use("/news", NewsRouter);

  const bookingRouter = require("./routes/booking");
  app.use("/golfclubs/AvailableSlot/booking", bookingRouter);

  db.sequelize.sync().then(() => {
    app.listen(4000, () => {
      // console.log("Server is running on port 4000");
      console.log(
        `Listening on port ${PORT}, AdminJS server started on URL: http://localhost:${PORT}${admin.options.rootPath}`
      );
    });
  });
};

startAdminJS();
