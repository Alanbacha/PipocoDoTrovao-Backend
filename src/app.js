// Requires
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Requiring the routes whose was cofigured in the file bellow
const postRoutes = require("./routes");

dotenv.config();

// middleware
const app = express();

// Adding Cors to the App
app.use(cors());

// Adding json App
app.use(express.json());

// Using the route
app.use("/", postRoutes);

// Start a listening to the port
module.exports = app;
