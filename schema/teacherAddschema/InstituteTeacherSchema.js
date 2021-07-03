const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  
});

var Teacher = mongoose.model("Teacher",TeacherSchema );

module.exports = Teacher;
