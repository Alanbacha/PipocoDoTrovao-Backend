// Requires
const express = require("express");
const dotenv = require("dotenv");

// Requiring the configuration of cross domain in the file bellow
const crossdomain = require("./utils/crossdomain");

// Requiring the routes whose was cofigured in the file bellow
const postRoutes = require("./routes");

dotenv.config();

// Middleware
const app = express();

// Using the configuration of cross domain
app.use(crossdomain);

// Adding json App
app.use(express.json());

// Using the route
app.use("/", postRoutes);

// Start a listening to the port
module.exports = app;
