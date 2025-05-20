const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books', required: false }]
  },
  { timestamps: true, collection: 'libraries' }
);

const Library = mongoose.model('libraries', librarySchema, 'libraries');

module.exports = Library;
