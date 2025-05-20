require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const booksRouter = require('./src/api/routes/books');
const librariesRouter = require('./src/api/routes/libraries');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/v1/libraries', librariesRouter);
app.use('/api/v1/books', booksRouter);

app.use((req, res) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('servidor levantado 3000');
});
