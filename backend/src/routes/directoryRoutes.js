const express = require('express');
const { getDirectoryContents } = require('../controllers/directoryController');
const {openFile } = require('../controllers/directoryController');
const router = express.Router();

// Route to get directory contents
router.get('/', getDirectoryContents);

// Route to open files
router.get('/open', openFile);

module.exports = router;
