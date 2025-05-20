# ENDPOINTS

- Tener en cuenta que las URLs de ejemplo no funcionarán en caso de contener un ID, ya que los IDs de ejemplo pertenecen a datos viejos

## BOOKS

### GET

| ENDPOINT                                                      | USO                                                                                                                                     | EJEMPLO DE URL                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| booksRouter.get('/length/:pages_amount', getBooksByMaxLength) | Recoge todos los libros con una cantidad menor o igual de páginas (pages_amount en bookSchema) que la indicada en el URL                | http://localhost:3000/api/v1/books/length/200               |
| booksRouter.get('/year/:release_year', getBooksByYear)        | Recoge todos los libros publicados en el año indicado en el URL (release_year en bookSchema)                                            | http://localhost:3000/api/v1/books/year/1902                |
| booksRouter.get('/genre/:genre', getBooksByGenre)             | Recoge todos los libros del género indicado en el URL (genre en bookSchema)                                                             | http://localhost:3000/api/v1/books/genre/fantasy            |
| booksRouter.get('/author/:author', getBooksByAuthor)          | Recoge todos los libros del autor indicado en el URL (author en bookSchema (NOTA: Los espacios en el nombre deben indicarse con "%20")) | http://localhost:3000/api/v1/books/author/Neil%20Gaiman     |
| booksRouter.get('/:id', getBookByID)                          | Recoge el libro con el ID (\_id de Mongo) indicado en la URL                                                                            | http://localhost:3000/api/v1/books/682a71b933f2ff2000fbba6f |
| booksRouter.get('/', getBooks)                                | Recoge todos los libros de la base de datos                                                                                             | http://localhost:3000/api/v1/books/                         |

### POST

| ENDPOINT                        | USO                                                                                                                | EJEMPLO DE URL                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| booksRouter.post('/', postBook) | Crea un nuevo libro insertando en el cuerpo de la petición (req.body) un objeto en formato .json según booksSchema | http://localhost:3000/api/v1/books/ |

```
EJEMPLO de req.body:

{
    "name": "The Son of the Wolf",
		"author": "Jack Tomato",
		"genre": "tomato",
		"release_year": 1900,
		"pages_amount": 222
}
```

### PUT

| ENDPOINT                         | USO                                                                                                                                                                                           | EJEMPLO DE URL                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| booksRouter.put('/:id', putBook) | Recoge el libro con el ID (\_id de Mongo) indicado en la URL, y actualiza dicho libro insertando en el cuerpo de la petición (req.body) un objeto en formato .json con los datos a actualizar | hhttp://localhost:3000/api/v1/books/682a71b933f2ff2000fbba76 |

```
EJEMPLO de req.body:
{
  "genre":"fantasy",
  "pages_amount":200
}
```

### DELETE

| ENDPOINT                               | USO                                                                        | EJEMPLO DE URL                                               |
| -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| booksRouter.delete('/:id', deleteBook) | Recoge el libro con el ID (\_id de Mongo) indicado en la URL, y lo elimina | hhttp://localhost:3000/api/v1/books/682a71b933f2ff2000fbba76 |

## LIBRARIES

### GET

| ENDPOINT                                                           | USO                                                                                          | EJEMPLO DE URL                                                  |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| librariesRouter.get('/location/:location', getLibrariesByLocation) | Recoge todas las bibliotecas con la ubicación indicada en la URL (location en librarySchema) | http://localhost:3000/api/v1/libraries/location/Barcelona       |
| librariesRouter.get('/:id', getLibraryByID)                        | Recoge la biblioteca con el ID (\_id de Mongo) indicado en la URL                            | http://localhost:3000/api/v1/libraries/682a55cae34eb7744609d7cf |
| librariesRouter.get('/', getLibraries)                             | Recoge todas las bibliotecas de la base de datos                                             | http://localhost:3000/api/v1/libraries/                         |

### POST

| ENDPOINT                                | USO                                                                                                                        | EJEMPLO DE URL                          |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| librariesRouter.post('/', postLibrary); | Crea una nueva biblioteca insertando en el cuerpo de la petición (req.body) un objeto en formato .json según librarySchema | http://localhost:3000/api/v1/libraries/ |

```
EJEMPLO de req.body:

{
	{
		"name": "Biblioteca Municipal de Murcia",
		"location": "Murcia",
		"books": []
	}
}
```

### PUT

| ENDPOINT                                | USO                                                                                                                                                                                                                                                                 | EJEMPLO DE URL                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| librariesRouter.put('/:id', putLibrary) | Recoge la biblioteca con el ID (\_id de Mongo) indicado en la URL, y actualiza dicha biblioteca insertando en el cuerpo de la petición (req.body) un objeto en formato .json con los datos a actualizar. Sirve especialmente para insertar libros en una biblioteca | http://localhost:3000/api/v1/libraries/682a71c4ceaf71a8885d81f0 |

```
EJEMPLO de req.body:
{
  "location":"Murcia"
  "books":["ID de libro","ID de libro","ID de libro"]
}
```

### DELETE

| ENDPOINT                                      | USO                                                                             | EJEMPLO DE URL                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| librariesRouter.delete('/:id', deleteLibrary) | Recoge la biblioteca con el ID (\_id de Mongo) indicado en la URL, y lo elimina | http://localhost:3000/api/v1/libraries/682a71c4ceaf71a8885d81ef |
