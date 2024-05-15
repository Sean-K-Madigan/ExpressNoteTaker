const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// // GET route for notes page
// router.get('/', (req, res) => 
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

// GET route for retrieving all the notes
router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../db/db.json'))
);

// POST route for a new note
router.post('/notes', (req, res) => {
  // Read notes from json file
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // Create a new note
  const newNote = req.body;
  newNote.id = uuidv4();

  // Add note to existing notes
  notes.push(newNote);

  // Write updated notes back to the file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));

  res.json(newNote);
});

// DELETE route for a note
router.delete('/notes/:id', (req, res) => {
  // Read notes from json file
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // Filter out the note with the given id
  notes = notes.filter(note => note.id !== req.params.id);

  // Write updated notes back to the file
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));

  res.json(notes);
});

module.exports = router;