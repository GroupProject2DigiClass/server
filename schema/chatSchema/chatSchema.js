const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({
  classKey: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  sender: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  anonymous: {
    type: Boolean,
    required: true,
    trim: false,
  },
  email: {
    type: String,
    required: true,
    trim: false,
  },
});

var Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
