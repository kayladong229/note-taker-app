// Declare path constant
const path = require('path');

module.exports = app => {
// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for home page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Redirect to home page if no matching route is found
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);
}
