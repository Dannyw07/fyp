//create main Model

const { golfclub } = require("../models");
const cloudinary = require("../utils/cloudinary");

//create golfclub

const addGolfCourse = async (req, res) => {
  const golfClub = req.body;
  // const {
  //   gc_name,
  //   gc_type,
  //   gc_city,
  //   gc_address,
  //   gc_distance,
  //   gc_photos,
  //   gc_title,
  //   gc_desc,
  //   gc_price,
  // } = req.body;
  try {
    //   if (gc_photos) {
    //     const uploadRes = await cloudinary.uploader.upload(gc_photos, {
    //       upload_preset: "golfClub",
    //     });

    //     if (uploadRes) {
    //       golfclub.create({
    //         gc_name: gc_name,
    //         gc_type: gc_type,
    //         gc_city: gc_city,
    //         gc_address: gc_address,
    //         gc_distance: gc_distance,
    //         gc_title: gc_title,
    //         gc_desc: gc_desc,
    //         gc_price: gc_price,
    //       });
    //       res.json("golf club creation completed");
    //     }
    //   }
    await golfclub.create(golfClub);
    res.json(golfClub);
  } catch (err) {
    res.json(err);
  }
};

//Get all golfclub from database

const getAllGolfCourse = async (req, res) => {
  try {
    const listOfGolfclubs = await golfclub.findAll();
    res.json(listOfGolfclubs);
  } catch (err) {
    res.json(err);
  }
};

//Get one golfclub from database

const getOneGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const findGolfclub = await golfclub.findByPk(id);
    res.json(findGolfclub);
  } catch (err) {
    res.json(err);
  }
};

const deleteGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    await golfclub.destroy({
      where: {
        gcId: id,
      },
    });
    res.json("Selected Golfclub has been deleted.");
  } catch (err) {
    res.json(err);
  }
};

const updateGolfCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedgc = await golfclub.update({ where: { gcId: id } });
    res.status(200).send(updatedgc);
  } catch (err) {
    res.json(err);
  }
};
module.exports = {
  addGolfCourse,
  getAllGolfCourse,
  getOneGolfCourse,
  deleteGolfCourse,
  updateGolfCourse,
};
