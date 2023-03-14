const asyncHandler = require('express-async-handler');
const { OpenWeatherAPI } = require("openweather-api-node");
const dotenv = require('dotenv').config();
const { success, error } = require('../responseApi/responseApiFront')

// Sets instance of OpenWeatherAPI
// f1f3333e6742de7ed86081f0fd1959e3
let weather = new OpenWeatherAPI({
  key: process.env.WEATHER_API_KEY,
  units: "imperial"
})

// Cleans forecast data to have one forecast per day
function dataByDay(data){
  let arrDataByDay = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].dt.getDay() !== data[i+1]?.dt.getDay()) {
      arrDataByDay.push(data[i]);
    }
  }
  arrDataByDay.pop();
  return arrDataByDay;
}

// @desc    Gets today's weather
// @route   POST /api/weather/getTodaysWeather
// @access  Public
const getTodaysWeather = asyncHandler(async (req, res) => {
  weather.setLocationByName(req.body.locationName)

  weather.getCurrent().then(data => {
    res.status(200).json(success(200, data))
  }).catch((err)=> {
    res.status(400).json(error(400, err.message))
  })
})

// @desc    Gets forecast up to 5 days
// @route   POST /api/weather/getForecast
// @access  Public
const getForecast = asyncHandler(async (req, res) => {
  weather.setLocationByName(req.body.locationName)

  weather.getForecast().then(data => {
    let cleanData = dataByDay(data);
    res.status(200).json(success(200, cleanData))
  }).catch((err)=> {
    console.log(err);
    res.status(400).json(error(400, err.message))
  })
})

module.exports = { getTodaysWeather, getForecast }