const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/api/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../db/db.json'))
);

router.post('/api/notes', (req, res) => {
  // Read notes from json file
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  // Create a new note
});

module.exports = router;