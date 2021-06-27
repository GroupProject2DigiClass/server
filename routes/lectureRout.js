const express = require("express");
const { auth } = require("../middleware/auth");
const lectureRouter = express.Router();

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

lectureRouter.post("/", makeNewLecture);
lectureRouter.post("/getAll", getAllLectures);
lectureRouter.post("/getLecture", getGivenLecture);
lectureRouter.post("/setCompleted", setCompletedLecture);
lectureRouter.post("/setBookmarked", setBookmarkLecture);
lectureRouter.post("/getStatus", getStatus);
lectureRouter.post("/delete", deleteLecture);
// lectureRouter.post("/editLecture", editLecture);
// lectureRouter.post("/setStatus", setStatus);

module.exports = lectureRouter;
