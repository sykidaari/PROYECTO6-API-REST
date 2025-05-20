const {
  getLibraries,
  getLibraryByID,
  getLibrariesByLocation,
  postLibrary,
  putLibrary,
  deleteLibrary
} = require('../controllers/libraries');

const librariesRouter = require('express').Router();

librariesRouter.get('/location/:location', getLibrariesByLocation);
librariesRouter.get('/:id', getLibraryByID);
librariesRouter.get('/', getLibraries);

librariesRouter.post('/', postLibrary);
librariesRouter.put('/:id', putLibrary);
librariesRouter.delete('/:id', deleteLibrary);

module.exports = librariesRouter;
