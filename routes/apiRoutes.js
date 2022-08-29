// Declare constants
const apiRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// API GET request
apiRouter.get('/api/notes', (req, res) => {
    // Read db.json
    let data = JSON.parse(fs.readFileSync('/db/db.json', 'utf8'));
    // Return note data
    res.json(data);
});
// API POST request
apiRouter.post('/api/notes', (req, res) => {
    // Read current data from db.json
    let data = JSON.parse(fs.readFileSync('/db/db.json', 'utf8'));
    res.json(data);

    // Declare constant for new note
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        // Create a unique ID for the note
        id: uuidv4()
    }

    // Push new note to json file
    data.push(newNote);
    // Rewrite db.json with new note
    fs.writeFileSync('/db/db.json', JSON.stringify(data));
    res.json(data);
});
// // API delete request
apiRouter.delete('/api/notes/:noteid', (req, res) => {
    let noteId = req.params.id.toString();
    console.info(`${req.method} request received for noteId: ${noteId}`);

    let data = JSON.parse(fs.readFileSync('/db/db.json', JSON.stringify(data)));

    const newData = data.filter(note => note.id.toString() !== noteId);

    fs.writeFileSyne('/db/db.json', JSON.stringify(newData));

    console.log(`The note with id ${noteId} has been deleted successfully.`)

    res.json(newData);
})

module.exports = apiRouter