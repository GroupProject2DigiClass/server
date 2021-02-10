const mongoose = require("mongoose");
const { TeacherRankOptions } = require("./../../constants");

const TeacherSchema = mongoose.Schema({
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
    enum: TeacherRankOptions,
  },
  teacher_id: {
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
    type: [Number],
    required: true,
    minLength: 1,
  },
  section: {
    type: [String],
    required: true,
    minLength: 1,
  },
  gender: {
    type: String,
    required: true,
    enum: GenderOptions,
  },
});

var Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
