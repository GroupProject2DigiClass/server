const express = require("express");
const { auth } = require("../middleware/auth");
const {studentauth } = require("../middleware/studentauth");
const {teacherauth } = require("../middleware/teacherauth");
const router = express.Router();
const mongoose = require("mongoose");


const{ 
  postnewassignment,
  getSubjectassignment,
  getIndividualSubjectassignment,
  deleteAssignment
} = require("../controllers/assignmentController.js");



router.post("/postnewassignment",teacherauth, postnewassignment);
router.post("/getSubjectassignment",studentauth, getSubjectassignment);
router.post("/getIndividualSubjectassignment", getIndividualSubjectassignment);
router.post("/deleteAssignment",teacherauth, deleteAssignment);
module.exports = router;
