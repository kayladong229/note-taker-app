// Declare constants
const api = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

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

    // Read db.json and push new note to db.json
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    data.push(newNote);

    // Rewrite db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    console.info("Notes have been successfully updated.")

    res.json(data);
});
// // API delete 
// api.delete('/api/notes/:noteid', (req, res) =>)

module.exports = api