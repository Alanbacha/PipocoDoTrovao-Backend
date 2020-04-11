// Requires
const express = require("express");

// Getting methods the files bellow
const cardsController = require("./controllers/CardsController");

// Creating a Router
const router = express.Router();

// Creating routes for Cards
router.get("/cards", cardsController.list);

// Exporting the Router with the news routes
module.exports = router;
