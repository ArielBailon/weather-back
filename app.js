const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const cors = require("cors");


// Connect database
connectDB();

const app = express();

// Middleware to allow CORS
app.use(cors());

// Sets up express middleware to handle/parse JSON data and access to it through req.body
app.use(express.json());

// Sets up express middleware to parse data and access to it through req.body
app.use(express.urlencoded({ extended: false }));

// Weather routes
app.use('/api/weather', require('./routes/weatherRoutes'));

// Start app
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))