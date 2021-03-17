const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
  subject_code: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    unique: true,
  },
  teacher: {
    type: [String],
    required: true,
    minLength: 4,
  },
  subject_name: {
    type: String,
    required: true,
    trim: true,
  },
  subject_type: {
    type: String,
    required: true,
  },
  head_background_color: {
    type: String,
    required: true,
  },
  head_text_color: {
    type: String,
    required: true,
  },
  body_background_color: {
    type: String,
    required: true,
  },
  body_block_color: {
    type: String,
    required: true,
  },
});

var Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
