// Declare constants
const html = require('express').Router();
const path = require('path');

// GET Route for notes page
html.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for home page
html.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Redirect to home page if no matching route is found
html.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = html;