const express = require("express");
const { auth } = require("../middleware/auth");
const router = express.Router();
const mongoose = require("mongoose");

const {
  makenewclassroom,
  infoaboutclassroom,
  postnewassignment,
  getSubjectassignment
} = require("../controllers/classController.js");


router.post("/", makenewclassroom);
router.post("/info", infoaboutclassroom);
router.post("/postnewassignment", postnewassignment);
router.post("/getSubjectassignment", getSubjectassignment);

module.exports = router;
