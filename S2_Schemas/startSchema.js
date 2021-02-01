const mongoose = require("mongoose");

const startSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

var Start = mongoose.model("Start", startSchema);

module.exports = Start;
