class CheckoutObjects {


    get CartIcon() {
      return $(".mini-cart-icon"); 
    }

    get CheckoutButton() {
        return $("//a[@href='https://demo.evershop.io/checkout']"); 
    }

    get FillEmail() {
        return $("//input[@placeholder='Email']"); 
    }

    get ContinueToShippigButton(){
        return $("(//button[@class='button primary'])[1]");
    }

    //Form Fill
    get FullName() { return $("input[name='address[full_name]'][placeholder='Full name']"); }
    get Telephone() { return $("input[placeholder='Telephone']"); }
    get Address() { return $("input[placeholder='Address']"); }
    get City() { return $("input[placeholder='City']"); }
    get Country() { return $("select[placeholder='Country']"); }
    get Province() { return $("select[placeholder='Province']"); }
    get Postcode() { return $("input[placeholder='Postcode']"); }
    get SubmitButton() { return $("button[type='submit']"); }
    get ShippingMethod() { return $("//label[@for='method1']"); }
    get ContinueToPayment() { return $("(//button[@class='button primary'])[1]"); }

    //payment
    get PaymentMethod(){
        return $("(//a[@href='#'])[5]");
    }
    
    get PlaceOrder(){
        return $("(//button[@class='button primary'])[2]");
    }

}

module.exports = new CheckoutObjects(); // export an instance