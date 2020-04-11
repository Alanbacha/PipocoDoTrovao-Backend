const generateRandomInt = require("../../src/utils/generateRandomInt");

describe("Generate Random Int", () => {
	it("should generate a random int inside a range", () => {
		const number = generateRandomInt();

		const min = 1;
		const max = 10;

		expect(number).toBeGreaterThanOrEqual(min).toBeLessThanOrEqual(max);
	});
});
