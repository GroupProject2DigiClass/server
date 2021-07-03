const express = require("express");
const { auth } = require("../middleware/auth");
const { teacherauth } = require("../middleware/teacherauth");
const classRouter = express.Router();

const {
  makeNewClassroom,
  infoAboutClassroom,
  editClassroom,
  getAllClassroom,
} = require("../controllers/classController.js");

classRouter.post("/",teacherauth, makeNewClassroom);
classRouter.post("/info",auth, infoAboutClassroom);
classRouter.patch("/edit",teacherauth, editClassroom);
classRouter.post("/getAll",auth, getAllClassroom);

module.exports = classRouter;
