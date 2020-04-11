const generateRandomInt = require("../../src/utils/generateRandomInt");

describe("Generate Random Int", () => {
	it("should generate a random int inside an especific range", () => {
		const min = 1;
		const max = process.env.cardsUniques || 14;

		//for (let i = min; i <= max; i++) {
		const number = generateRandomInt(min, max);

		expect(number).toBeGreaterThanOrEqual(min);
		expect(number).toBeLessThanOrEqual(max);
		//}
	});
});
