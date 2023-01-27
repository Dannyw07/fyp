const { comment } = require("../models");

// const addNews = async (req, res) => {
//     const id = req.params.id;
//     try {
//       // let data = {
//       //   booking_id: id,
//       //   reference_date: req.body.reference_date,
//       //   booking_date: req.body.booking_date,
//       //   booking_time: req.body.booking_time,
//       //   price: req.body.price,
//       };
//       const timeSlot = await comment.create(data);
//       res.status(200).send(timeSlot);
//     } catch (err) {
//       res.json(err);
//     }
//   };
module.exports = {
  addNews,
};
