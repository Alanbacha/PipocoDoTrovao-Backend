const connection = require("../database/connection");

/**
 * A method to List Incidents
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.list = async (req, res) => {
	const cardsPerPage = process.env.incidentsPerPage || 4;
	const { page = 1 } = req.query;

	const [count] = await connection("incident").count();

	const cards = await connection("cards AS c")
		.limit(cardsPerPage)
		.offset((page - 1) * cardsPerPage)
		.select("c.*");

	res.header("X-Total-Count", count["count(*)"]);

	return res.json(cards);
};
