// server.js

const express = require('express');
const booksRouter = require('./routes/book');
const mongoose = require('./config/db');



require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(express.json());


app.use('/api/books', booksRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});