const math = require("mathjs");

module.exports = function generateRandomInt(min, max) {
	return math.randomInt(min, max);
};
