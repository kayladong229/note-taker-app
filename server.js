// Declare initial constants and routes
const express = require('express');
const apiRouter = require('./routes/apiRoutes')
const htmlRouter = require('./routes/htmlRoutes')
// Declare initial PORT
const PORT = process.env.PORT || 3001;
// Create express server
const app = express();

// Middlewares for POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));