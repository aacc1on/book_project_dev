//config/db.js

const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI)
    .then(()=> console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

module.exports = mongoose;