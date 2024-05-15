const router = require('express').Router();

// Import modular routes for /notes
const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');

// Route for /notes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;