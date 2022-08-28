// Declare constants
const api = require('express').Router();
const { response } = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const database = require('../db/db.json');
// API GET request
api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    // Read db.json
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.info("Returning note data: " + JSON.stringify(data));
    // Return note data
    res.json(data);
});
// API POST request
api.post('api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    // Declare constant for text of new note
    const newNote = req.body;
    console.info("New node added: " + JSON.stringify(newNote));

    // Assign unique ID for every new note
    newNote.id = uuidv4();

    // Read db.json
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    data.push(newNote);

    // Rewrite db.json
    fs.writeFile('./db/db.json', JSON.stringify(data), (err) =>
        err ? console.error(err) : console.info('Your notes have been updated.')
    );

    res.json(data);
})

module.exports = api