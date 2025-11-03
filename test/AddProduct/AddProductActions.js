import AddProductObjects from './AddProductObjects.js';

class AddProductActions {


    async openProductPage1() {
        await browser.url('https://demo.evershop.io/nike-react-infinity-run-flyknit-175');
        console.log('✅ Product page loaded');
    }

    async openProductPage2() {
    await browser.url('https://demo.evershop.io/men/nike-air-zoom-pegasus-35-146');
    console.log('✅ Product page loaded');
    }


    async selectSize() {
    await AddProductObjects.AddToCartButton.waitForClickable({ timeout: 5000 });
    await AddProductObjects.SizeOption.click();
    console.log('📏 Size M selected');
    }


    async selectRandomColor() {
        const colors = await AddProductObjects.ColorOption();

        if (colors.length < 2) {
            throw new Error('Not enough colors to select randomly');
        }

        // Random index between 2nd and 5th option (0-based index 1 to 4)
        const randomIndex = Math.floor(Math.random() * (Math.min(5, colors.length) - 2 + 1)) + 2;

        await colors[randomIndex].$('a').click();
        const colorName = await colors[randomIndex].$('a').getText();
        console.log(`🎨 Random color selected: ${colorName}`);
    }


    async addToCart() {
    await AddProductObjects.AddToCartButton.waitForClickable({ timeout: 5000 });
    await AddProductObjects.AddToCartButton.click();
    console.log('🛒 Product added to cart');
    }


   
    // Full flow
    async AddProtoCartFlow1() {
        await this.openProductPage1();
        await browser.pause(2000);
        await this.selectSize();
        await browser.pause(2000);
        await this.selectRandomColor();
        await browser.pause(2000);
        await this.addToCart();
        await browser.pause(2000);
    }

    async AddProtoCartFlow2() {
        await this.openProductPage2();
        await browser.pause(2000);
        await this.selectSize();
        await browser.pause(2000);
        await this.selectRandomColor();
        await browser.pause(2000);
        await this.addToCart();
        await browser.pause(2000);
    }
}

export default new AddProductActions();