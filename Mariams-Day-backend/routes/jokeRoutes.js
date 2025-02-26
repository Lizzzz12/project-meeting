const express = require('express');
const { getJoke, voteJoke } = require('../controllers/jokeController');

const router = express.Router();

router.get('/joke', getJoke);
router.post('/joke/:id', voteJoke);

module.exports = router;
