const express = require("express");
const { auth } = require("../middleware/auth");
const practiceRouter = express.Router();

const {
  getAllPractice,
  makeNewPractice,
  getGivenPractice,
} = require("../controllers/practiceController");

practiceRouter.post("/", getAllPractice);
practiceRouter.post("/add", makeNewPractice);
practiceRouter.post("/given", getGivenPractice);

module.exports = practiceRouter;
