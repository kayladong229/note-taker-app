// Declare initial constants and routes
const express = require('express');
const apiRouter = require('./routes/apiRoutes')
const htmlRouter = require('./routes/htmlRoutes')
// Create express server
const app = express();
// Declare initial PORT
const PORT = process.env.PORT || 3001;

// Middlewares for POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares for routers
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));