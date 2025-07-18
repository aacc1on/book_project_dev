//routes/book.js

const express = require('express');
const Book = require('../models/Books');

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, bookurl } = req.body;
    try{
        const result = await Book.create({ title, bookurl });
        result.save();
        res.status(201).json(result);
    }catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try{
        const result = await Book.find();
        res.status(200).json(result);
    }catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
