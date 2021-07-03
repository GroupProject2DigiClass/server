const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
  file: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

var File = mongoose.model("File", FileSchema);

module.exports = File;
