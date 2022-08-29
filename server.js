// Declare dependencies
const express = require('express');
// Create express server
const app = express();
// Declare initial PORT
const PORT = process.env.PORT || 3001;

// Middlewares for POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares for routers
require('./routes/apiRoutes') (app);
require('./routes/htmlRoutes') (app);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));