

class AddProductObjects {


    //  color option list
    async ColorOption() {
        const colorlist = await $$('//ul[contains(@class,"variant-option-list")]/li');
        return colorlist;
    }

    // Size option (M)
    get SizeOption() {
        return $("//li[@class='']/a[text()='M']");
    }

    // Add to cart button
    get AddToCartButton() {
        return $("//button[@class='button primary outline']");
    }
}

export default new AddProductObjects();