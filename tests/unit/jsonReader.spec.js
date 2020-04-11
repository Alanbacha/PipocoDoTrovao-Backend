const jsonReader = require("../../src/utils/jsonReader");

describe("Generate Random Int", () => {
	it("should get a object data from a file.json", () => {
		jsonReader("./src/database/cards.json", (err) => {
			expect(err).toBeNull();
		});
	});
});
