

import AddProductActions from '../test/AddProduct/AddProductActions.js';

describe('Add a Product', () => {
    it('Add 1st product', async () => {
        await AddProductActions.AddProtoCartFlow1(); // contains all browser commands
    });

    it('Add 2nd product', async () => {
        await AddProductActions.AddProtoCartFlow2(); // contains all browser commands
    });
});