const asyncHandler = require('express-async-handler');
const { OpenWeatherAPI } = require("openweather-api-node");
const dotenv = require('dotenv').config();
const { success } = require('../responseApi/responseApiFront')

// @desc    Get todays weather
// @route   GET /api/weather
// @access  Public
const getTodaysWeather = asyncHandler(async (req, res) => {
  let weather = new OpenWeatherAPI({
    key: 'e7704bc895b4a8d2dfd4a29d404285b6',
    locationName: req.body.locationName,
    units: "imperial"
  })

  weather.getToday().then(data => {
    // console.log(data)
    res.status(200).json(success(200, data))
    // console.log(`Current location is: ${data.weather.temp}\u00B0F`)
  })

})


module.exports = { getTodaysWeather }