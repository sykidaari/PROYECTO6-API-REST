# ENDPOINTS

## BOOKS

### GET

| ENDPOINT                                                      | USO                                                                                                                                     | EJEMPLO DE URL                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| booksRouter.get('/length/:pages_amount', getBooksByMaxLength) | Recoge todos los libros con una cantidad menor o igual de páginas (pages_amount en bookSchema) que la indicada en el URL                | http://localhost:3000/api/v1/libraries/location/Barcelona   |
| booksRouter.get('/year/:release_year', getBooksByYear)        | Recoge todos los libros publicados en el año indicado en el URL (release_year en bookSchema)                                            | http://localhost:3000/api/v1/books/year/1902                |
| booksRouter.get('/genre/:genre', getBooksByGenre)             | Recoge todos los libros del género indicado en el URL (genre en bookSchema)                                                             | http://localhost:3000/api/v1/books/genre/fantasy            |
| booksRouter.get('/author/:author', getBooksByAuthor)          | Recoge todos los libros del autor indicado en el URL (author en bookSchema (NOTA: Los espacios en el nombre deben indicarse con "%20")) | http://localhost:3000/api/v1/books/author/Neil%20Gaiman     |
| booksRouter.get('/:id', getBookByID)                          | Recoge el libro con el ID (\_id de Mongo) indicado en la URL                                                                            | http://localhost:3000/api/v1/books/682a71b933f2ff2000fbba6f |
| booksRouter.get('/', getBooks)                                | Recoge todos los libros de la base de datos                                                                                             | http://localhost:3000/api/v1/books/                         |

### POST

| ENDPOINT                                                      | USO | EJEMPLO DE URL |
| ------------------------------------------------------------- | --- | -------------- |
| booksRouter.get('/length/:pages_amount', getBooksByMaxLength) |     |                |
| booksRouter.get('/year/:release_year', getBooksByYear)        |     |                |
| booksRouter.get('/genre/:genre', getBooksByGenre)             |     |                |
| booksRouter.get('/author/:author', getBooksByAuthor)          |     |                |
| booksRouter.get('/:id', getBookByID)                          |     |                |
| booksRouter.get('/', getBooks)                                |     |                |

### PUT

### DELETE

## LIBRARIES

### GET

### POST

### PUT

### DELETE
