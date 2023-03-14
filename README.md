# Weather APP - Back
This weather app allows you to fetch and see the day's weather by the location name, it also allows you to get the forecast for the next 5 days. The project connects and delivers data from to the OpenWeather API by using the npm `openweather-api-node` package. The project was done in `Node.js version 16`. 


## Installation
Clone the project by using:
```sh
git clone https://github.com/ArielBailon/weather-back
```
 After that you'll need to install the dependencies by using:
 ```sh
npm install
```
 Before you can start the project there's a file called `.env.sample` which you should create a copy with the name `.env`. For the project to run succesfully you'd have to fill the params in this file, the `WEATHER_API_KEY` param can be obtained on the website: `https://openweathermap.org/`.
 
 Once that is done, run the script:
 ```
 npm run start
 ```
 
 This will make run the script located at the `package.json` file, after that the project will run on the port `3000` and you can access it by going to `http://localhost:3000`

If you followed the steps you should be able to use this API without any problem.
