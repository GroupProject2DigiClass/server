const express = require("express");
const { auth } = require("../middleware/auth");
const lectureRouter = express.Router();
const {sectureauth}= require("../middleware/lectureAuth");
const {teacherauth}= require("../middleware/teacherauth");

const {
  makeNewLecture,
  getAllLectures,
  getGivenLecture,
  setCompletedLecture,
  setBookmarkLecture,
  getStatus,
  setStatus,
  deleteLecture,
} = require("../controllers/lectureController.js");

lectureRouter.post("/",teacherauth, makeNewLecture);
lectureRouter.post("/getAll",sectureauth, getAllLectures);
lectureRouter.post("/getLecture", getGivenLecture);
lectureRouter.post("/setCompleted",sectureauth, setCompletedLecture);
lectureRouter.post("/setBookmarked",sectureauth, setBookmarkLecture);
lectureRouter.post("/getStatus",sectureauth, getStatus);
lectureRouter.post("/delete",sectureauth, deleteLecture);
// lectureRouter.post("/editLecture", editLecture);
// lectureRouter.post("/setStatus", setStatus);

module.exports = lectureRouter;
