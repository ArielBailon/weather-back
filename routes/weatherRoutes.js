const express = require('express');
const router = express.Router();
const { getTodaysWeather } = require('../controllers/weatherController');

router.post('/getTodaysWeather', getTodaysWeather);

module.exports = router;