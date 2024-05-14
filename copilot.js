const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET route for retrieving all the notes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

// POST route for a new note
app.post('/api/notes', (req, res) => {
  // Read notes from json file
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // Create a new note
  const newNote = req.body;
  newNote.id = notes.length.toString();

  // Add it to existing notes
  notes.push(newNote);

  // Write updated notes back to the file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));

  res.json(newNote);
});

// DELETE route for a note
app.delete('/api/notes/:id', (req, res) => {
  // Read notes from json file
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // Filter out the note with the given id
  notes = notes.filter(note => note.id !== req.params.id);

  // Write updated notes back to the file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));

  res.json(notes);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);