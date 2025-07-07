const express = require('express');
const router = express.Router();
const { saveResult, getResultsByEmail } = require('../controllers/resultController');

router.post('/results', saveResult);
router.get('/results/:email', getResultsByEmail);

module.exports = router;
