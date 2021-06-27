const express = require("express");
const { auth } = require("../middleware/auth");
const classRouter = express.Router();

const {
  makeNewClassroom,
  infoAboutClassroom,
  editClassroom,
  getAllClassroom,
} = require("../controllers/classController.js");

classRouter.post("/", makeNewClassroom);
classRouter.post("/info", infoAboutClassroom);
classRouter.patch("/edit", editClassroom);
classRouter.post("/getAll", getAllClassroom);

module.exports = classRouter;
