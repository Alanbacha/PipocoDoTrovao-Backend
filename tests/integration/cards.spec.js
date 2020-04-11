const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Cards", () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it("should be able to list 52 cards", async () => {
		const res = await request(app).get("/cards");

		expect(res.header.toHaveProperty("X-Total-Count"));
		expect(res.header["X-Total-Count"]).toBe(52);
	});
});
