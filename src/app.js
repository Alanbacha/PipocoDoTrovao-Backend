// Requires
const express = require("express");
const dotenv = require("dotenv");

// Requiring the routes whose was cofigured in the file bellow
const postRoutes = require("./routes");

dotenv.config();

// middleware
const app = express();

// Adding json App
app.use(express.json());

// Using the route
app.use("/", postRoutes);

// Start a listening to the port
module.exports = app;
