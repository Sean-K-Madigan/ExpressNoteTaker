const router = require('express').Router();

// Import modular routes for /notes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;