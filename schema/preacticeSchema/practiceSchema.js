const mongoose = require("mongoose");

const PracticeSchema = mongoose.Schema({
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
  files: {
    type: [Object],
  },
  instruction: {
    type: String,
    required: false,
    
  },
  driveLink: {
    type: String,
    required: true,
  }
});

var Practice = mongoose.model("Practice", PracticeSchema);

module.exports = Practice;
