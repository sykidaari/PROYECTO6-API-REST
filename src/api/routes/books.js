const {
  getBooks,
  getBookByID,
  getBooksByAuthor,
  getBooksByGenre,
  getBooksByYear,
  getBooksByMaxLength,
  postBook,
  putBook,
  deleteBook
} = require('../controllers/books');

const booksRouter = require('express').Router();

booksRouter.get('/length/:pages_amount', getBooksByMaxLength);
booksRouter.get('/year/:release_year', getBooksByYear);
booksRouter.get('/genre/:genre', getBooksByGenre);
booksRouter.get('/author/:author', getBooksByAuthor);
booksRouter.get('/:id', getBookByID);
booksRouter.get('/', getBooks);

booksRouter.post('/', postBook);
booksRouter.put('/:id', putBook);
booksRouter.delete('/:id', deleteBook);

module.exports = booksRouter;
