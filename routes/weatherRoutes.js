const express = require('express');
const router = express.Router();
const { getTodaysWeather, getForecast } = require('../controllers/weatherController');

router.post('/getTodaysWeather', getTodaysWeather);
router.post('/getForecast', getForecast);

module.exports = router;