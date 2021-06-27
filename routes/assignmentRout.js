const express = require("express");
const { auth } = require("../middleware/auth");
const router = express.Router();
const mongoose = require("mongoose");


const{ 
  postnewassignment,
  getSubjectassignment,
  getIndividualSubjectassignment
} = require("../controllers/assignmentController.js");



router.post("/postnewassignment", postnewassignment);
router.post("/getSubjectassignment", getSubjectassignment);
router.post("/getIndividualSubjectassignment", getIndividualSubjectassignment);
module.exports = router;
