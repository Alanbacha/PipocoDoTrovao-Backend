// Requires
const express = require("express");

// Getting methods the files bellow
const cardsController = require("./controllers/CardsController");
const rulesController = require("./controllers/RulesController");

// Creating a Router
const router = express.Router();

// Creating routes for Cards
router.get("/cards", cardsController.list);

// Creating routes for Rules
router.get("/rules", rulesController.list);

// Exporting the Router with the news routes
module.exports = router;
