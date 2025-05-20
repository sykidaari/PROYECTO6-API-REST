const Library = require('../models/libraries');

const getLibraries = async (req, res, next) => {
  try {
    const libraries = await Library.find().populate('books');
    return res.status(200).json(libraries);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getLibraryByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const library = await Library.findById(id).populate('books');
    return res.status(200).json(library);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const getLibrariesByLocation = async (req, res, next) => {
  try {
    const { location } = req.params;
    const libraries = await Library.find({ location }).populate('books');
    return res.status(200).json(libraries);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'GET failed', error: error.message });
  }
};

const postLibrary = async (req, res, next) => {
  try {
    const newLibrary = new Library(req.body);
    const savedLibrary = await newLibrary.save();
    return res.status(201).json(savedLibrary);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'POST failed', error: error.message });
  }
};

const putLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location, books } = req.body;

    const updateFields = { location, name };

    if (Array.isArray(books)) {
      updateFields.$addToSet = { books: { $each: books } };
    }
    const updatedLibrary = await Library.findByIdAndUpdate(id, updateFields, {
      new: true
    });
    return res.status(200).json(updatedLibrary);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'PUT failed', error: error.message });
  }
};

const deleteLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLibrary = await Library.findByIdAndDelete(id);
    return res.status(200).json(deletedLibrary);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'DEL failed', error: error.message });
  }
};

module.exports = {
  getLibraries,
  getLibraryByID,
  getLibrariesByLocation,
  postLibrary,
  putLibrary,
  deleteLibrary
};
