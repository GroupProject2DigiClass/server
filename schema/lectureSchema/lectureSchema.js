const mongoose = require("mongoose");

const LectureSchema = mongoose.Schema({
  classKey: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  assignmentKey: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  unitN: {
    type: Number,
    required: true,
    trim: true,
  },
  unit: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  topics: {
    type: [Object],
    required: true,
  },
  files: {
    type: [Object],
  },
  completed: {
    type: Number,
    required: true,
  },
});

var Lecture = mongoose.model("Lecture", LectureSchema);

module.exports = Lecture;
