const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: ""
  },
  publisher: {
    type: String,
    default: ""
  },
  pubdate: {
    type: String,
    default: Date.now
  },
  upldate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("book", BookSchema);
