const mongoose = require("mongoose");

const CompletedSchema = mongoose.Schema({
  assignmentKey: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 3,
  },
  classKey: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  completed: {
    type: [String],
    required: true,
  },
  bookmark: {
    type: [String],
    required: true,
  },
});

var Completed = mongoose.model("Completed", CompletedSchema);

module.exports = Completed;
