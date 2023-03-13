const asyncHandler = require('express-async-handler');
const { OpenWeatherAPI } = require("openweather-api-node");
const dotenv = require('dotenv').config();

// @desc    Get todays weather
// @route   GET /api/weather
// @access  Public
const getTodaysWeather = asyncHandler(async (req, res) => {
  let weather = new OpenWeatherAPI({
    key: process.env.WEATHER_API_KEY,
    // coordinates: {
    //   lat: 51.5085,
    //   lon: -0.1257
    // },
    locationName: "Man",
    units: "imperial"
})
  console.log(weather);
  // weather.getCurrent().then(data => {
  //   console.log(data)
  //   console.log(`Current temperature is: ${data.weather.temp.cur}\u00B0F`)
  // })

  weather.getLocation().then(data => {
    console.log(data)
    console.log(`Current location is: ${data.weather.temp.cur}\u00B0F`)
  })
  res.status(200).json('api res')
})


module.exports = { getTodaysWeather }