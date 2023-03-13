const express = require('express');
const router = express.Router();
const { getTodaysWeather } = require('../controllers/weatherController');

router.get('/', getTodaysWeather);

module.exports = router;