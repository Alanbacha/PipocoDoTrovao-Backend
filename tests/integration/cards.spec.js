const request = require("supertest");
const app = require("../../src/app");

describe("Cards", () => {
	const cardsUniques = process.env.cardsUniques || 14;

	it(`should be able to list ${cardsUniques} cards`, async () => {
		const res = await request(app).get("/cards");

		expect(res.header).toHaveProperty("x-total-count");
		expect(res.header["x-total-count"]).toBe(cardsUniques);
	});
});
