const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ['horror', 'fantasy', 'romance', 'history', 'adventure']
    },
    release_year: { type: Number, required: true },
    pages_amount: { type: Number, required: true }
  },
  { timestamps: true, collection: 'books' }
);

const Book = mongoose.model('books', bookSchema, 'books');

module.exports = Book;
