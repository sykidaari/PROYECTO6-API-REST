const Book = require('../models/books');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getBookByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getBooksByAuthor = async (req, res, next) => {
  try {
    const { author } = req.params;
    const books = await Book.find({ author });
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getBooksByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const books = await Book.find({ genre });
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getBooksByYear = async (req, res, next) => {
  try {
    const { release_year } = req.params;
    const books = await Book.find({ release_year });
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getBooksByMaxLength = async (req, res, next) => {
  try {
    const { pages_amount } = req.params;
    const books = await Book.find({ pages_amount: { $lte: pages_amount } });
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'POST failed', error: error.message });
  }
};

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBook = new Book(req.body);
    newBook._id = id;
    const updatedBook = await Book.findByIdAndUpdate(id, newBook, {
      new: true
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'PUT failed', error: error.message });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'DEL failed', error: error.message });
  }
};

module.exports = {
  getBooks,
  getBookByID,
  getBooksByAuthor,
  getBooksByGenre,
  getBooksByYear,
  getBooksByMaxLength,
  postBook,
  putBook,
  deleteBook
};
