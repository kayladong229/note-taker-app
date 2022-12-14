// Declare fs constant
const fs = require('fs');
// Unique ID constant
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
// API GET request
app.get('/api/notes', (req, res) => {
    // Read db.json file and return all saved notes
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log('\nCurrent notes: ', data);
    res.json(data);
});

// API POST request
app.post('/api/notes', (req, res) => {
    // Declare variable for new note
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        // Create a unique ID for the note
        id: uuidv4()
    }
    // Retrieve current data from db.json
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // Push new note to json file
    data.push(newNote);
    // Rewrite db.json with new note
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    console.log(`\nYour new note has been successfully added under the ID ${newNote.id}.`);
    res.json(data);
});

// // API delete request
app.delete('/api/notes/:id', (req, res) => {
    // Declare ID of specific note to be deleted
    let noteId = req.params.id;
    // Read db.json data
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // Remove the note with the specified ID
    const newData = data.filter(savedNote => savedNote.id !== noteId);
    // Rewrite db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    console.log(`\nThe note under ID ${noteId} has been successfully deleted.`);
    res.json(newData);
})
}