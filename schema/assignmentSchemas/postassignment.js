const mongoose = require("mongoose");

const postassignmentSchema = mongoose.Schema({
  classKey: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  instruction: {
    type: String,
    required: true,
  },
  points: {
    type: String,

  },
  dueDate: {
    type: String,
    required: true,
  },
  dueTime: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: false,
  },
  files:{
    type: Array,
    unique: true,
  },
  
});

var postassign = mongoose.model("postAssignment", postassignmentSchema);

module.exports = postassign;


