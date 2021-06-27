const mongoose = require("mongoose");

const AssignCompletedSchema = mongoose.Schema({
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
  
});

var AssiCompleted = mongoose.model("AssignCompleted", AssignCompletedSchema);

module.exports = AssiCompleted;