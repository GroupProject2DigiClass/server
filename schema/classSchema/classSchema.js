const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
  classKey: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    unique: true,
  },
  subjectCode: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  subjectTeacher: {
    type: [String],
    required: true,
  },
  studentAllowed: {
    type: [String],
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  subjectType: {
    type: String,
    required: true,
  },
  headBackgroundColor: {
    type: String,
    required: true,
  },
  headTextColor: {
    type: String,
    required: true,
  },
  bodyBackgroundColor: {
    type: String,
    required: true,
  },
  bodyBlockColor: {
    type: String,
    required: true,
  },
});

var Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
