// Declare constants
const htmlRouter = require('express').Router();
const path = require('path');

// GET Route for notes page
htmlRouter.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for home page
htmlRouter.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Redirect to home page if no matching route is found
htmlRouter.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlRouter