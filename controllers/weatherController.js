const asyncHandler = require('express-async-handler');
const { OpenWeatherAPI } = require("openweather-api-node");
const dotenv = require('dotenv').config();
const { success, error } = require('../responseApi/responseApiFront')

let weather = new OpenWeatherAPI({
  key: process.env.WEATHER_API_KEY,
  units: "imperial"
})

// @desc    Gets today's weather
// @route   POST /api/weather/getTodaysWeather
// @access  Public
const getTodaysWeather = asyncHandler(async (req, res) => {
  weather.setLocationByName(req.body.locationName)
  console.log(weather)

  weather.getCurrent().then(data => {
    console.log(data)
    res.status(200).json(success(200, data))
    // console.log(`Current location is: ${data.weather.temp}\u00B0F`)
  }).catch((err)=> {
    res.status(400).json(error(400, err.message))
  })
})

// @desc    Gets forecast up to 5 days
// @route   POST /api/weather/getForecast
// @access  Public
const getForecast = asyncHandler(async (req, res) => {
  weather.setLocationByName(req.body.locationName)
  console.log(weather)

  weather.getForecast().then(data => {
    console.log(data)
    res.status(200).json(success(200, data))
    // console.log(`Current location is: ${data.weather.temp}\u00B0F`)
  }).catch((err)=> {
    res.status(400).json(error(400, err))
  })
})


module.exports = { getTodaysWeather, getForecast }