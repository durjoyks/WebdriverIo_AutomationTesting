const CheckoutObjects = require('./CheckoutObjects');

class CheckoutAction {
    
    async ClickCartIcon() {
    await CheckoutObjects.CartIcon.Click();
    }
    //Or
    async GotoCart() {
        await browser.url('https://demo.evershop.io/cart');
    }

    async CheckoutButton() {
        await CheckoutObjects.CheckoutButton.click();
    }

    async FillEmail() {
        await CheckoutObjects.FillEmail.setValue("jucse28.376@gmail.com");
    }

    async ContinueToShipping(){
        await CheckoutObjects.ContinueToShippigButton.click();
    }



    //flow
    // first add product in cart

    async   Checkout() {
        await this.GotoCart();
        await browser.pause(500);
        await this.CheckoutButton();
        await browser.pause(500);
        await this.FillEmail();
        await browser.pause(500);
        await this.ContinueToShipping();
        await browser.pause(500);
    }  

    async fillCheckoutForm({ fullName, telephone, address, city, country, province, postcode }) {
        await CheckoutObjects.FullName.waitForDisplayed({ timeout: 5000 });
        await CheckoutObjects.FullName.setValue(fullName);
        await CheckoutObjects.Telephone.setValue(telephone);
        await CheckoutObjects.Address.setValue(address);
        await CheckoutObjects.City.setValue(city);
        await CheckoutObjects.Country.selectByVisibleText(country);
        await CheckoutObjects.Province.selectByVisibleText(province);
        await CheckoutObjects.Postcode.setValue(postcode);
        await browser.pause(2000); // optional pause to observe
        await CheckoutObjects.ShippingMethod.click();
        await CheckoutObjects.ContinueToPayment.click();
    }

    async PaymentandConfirmOrder(){
        await browser.pause(3000); // optional pause to observe
        await CheckoutObjects.PaymentMethod.click();
        await CheckoutObjects.PlaceOrder.click();
        await browser.pause(4000); // optional pause to observe

    }




}

module.exports = new CheckoutAction();