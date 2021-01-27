const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pid: {
    type: String,
    required: true,
    unique: true,
  },
  cpa: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  images: String,
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
