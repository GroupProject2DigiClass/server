const express = require("express");
const { auth } = require("../middleware/auth");
const fileRouter = express.Router();

const {
  addFile,
  getGivenFile,
  deleteGivenFile,
} = require("../controllers/fileController.js");

fileRouter.post("/", addFile);
fileRouter.post("/get", getGivenFile);
fileRouter.post("/delete", deleteGivenFile);

module.exports = fileRouter;
