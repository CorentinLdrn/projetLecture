const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  parution: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  moviment: {
    type: String,
  },
  cover: {
    type: String,
  },
  reading: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
