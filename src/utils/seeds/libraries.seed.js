require('dotenv').config();
const libraries = require('../../data/libraries');
const Library = require('../../api/models/libraries');

const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    console.log('connected succesfully to DB');
    const allLibraries = await Library.find();

    allLibraries.length
      ? (await Library.collection.drop(), console.log('data deleted'))
      : console.log('no data to delete');
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await Library.insertMany(libraries);
    console.log('Seed data created');
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => {
    mongoose.disconnect();
    console.log('connection to DB ended');
  });
