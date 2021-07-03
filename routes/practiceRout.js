const express = require("express");
const { auth } = require("../middleware/auth");
const practiceRouter = express.Router();
const {teacherauth} =require("../middleware/teacherauth");

const {
  getAllPractice,
  makeNewPractice,
  getGivenPractice,
} = require("../controllers/practiceController");

practiceRouter.post("/", getAllPractice);
practiceRouter.post("/add",teacherauth, makeNewPractice);
practiceRouter.post("/given", getGivenPractice);

module.exports = practiceRouter;
