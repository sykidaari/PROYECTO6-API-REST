require('dotenv').config();
const books = require('../../data/books');
const Book = require('../../api/models/books');

const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    console.log('connected succesfully to DB');
    const allBooks = await Book.find();

    allBooks.length
      ? (await Book.collection.drop(), console.log('data deleted'))
      : console.log('no data to delete');
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await Book.insertMany(books);
    console.log('Seed data created');
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => {
    mongoose.disconnect();
    console.log('connection to DB ended');
  });
