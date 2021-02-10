const mongoose = require("mongoose");
const { StudentRankOptions, GenderOptions } = require("./../../constants");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
  },
  institute_id: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  rank: {
    type: String,
    required: true,
    enum: StudentRankOptions,
  },
  roll_no: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  image: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    minLength: 5,
  },
  profile_link: {
    type: String,
    trim: true,
  },
  class: {
    type: Number,
    required: true,
    min: 1,
  },
  section: {
    type: String,
    required: true,
    trim: true,
    min: 1,
  },
  gender: {
    type: String,
    required: true,
    enum: GenderOptions,
  },
});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
