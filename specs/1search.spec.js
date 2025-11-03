

const SearchAction = require('../test/Search/SearchAction');
const productName = "Nike Air Zoom";

describe("Evershop automation test suite", () => {
    it("successfully searches a valid product", async () => {

        await SearchAction.Search(productName);

    });
});