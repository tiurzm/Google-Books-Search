const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  bookId: String,
  author: String,
  description: String,
  image: String,
  link: String,
  publisher: String,
  publishedDate: String, 
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
