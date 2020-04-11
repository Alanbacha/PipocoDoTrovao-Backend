const jsonReader = require("../utils/jsonReader");

/**
 * A method to List Incidents
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.list = async (req, res) => {
	jsonReader("./src/database/cards.json", (err, obj) => {
		if (err) {
			return res.status(501).json({ error: err, success: false });
		}

		let cards = obj.cards;
		if (cards === undefined) {
			return res.status(501).json({ error: "the attribute cards is undefineds", success: false });
		}

		cards = obj.cards;
		res.header("x-total-count", cards.length);

		return res.json(cards);
	});
};
