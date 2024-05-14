// Require necessary resource files
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const notes = require('./routes/notes.js');


// Set up the allocated or default port
const PORT = process.env.PORT || 3001;

// Create an instance of the express server
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for homepage
app.use('/api', api);
// GET Route for notes page
app.use('/notes', notes);




// Start the server on the specified port
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);