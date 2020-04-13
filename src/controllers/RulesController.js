const jsonReader = require("../utils/jsonReader");

/**
 * A method to List Incidents
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.list = async (req, res) => {
	jsonReader("./src/database/rules.json", (err, obj) => {
		if (err) {
			return res.status(501).json({ error: err, success: false });
		}

		let rules = obj.rules;
		if (rules === undefined) {
			return res.status(501).json({ error: "the attribute rules is undefineds", success: false });
		}

		rules = obj.rules;
		res.header("x-total-count", rules.length);

		return res.json(rules);
	});
};
