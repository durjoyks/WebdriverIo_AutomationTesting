
const CheckoutActions = require('../test/Checkout/CheckoutActions');
import AddProductActions from '../test/AddProduct/AddProductActions.js';

describe("Checkout Process", () => {

    it("Add product", async () => {

        await AddProductActions.AddProtoCartFlow1(); 

    });

    it("go to cart , Click Checkout, fill email , Contiue to Shipping", async () => {

        await CheckoutActions.Checkout();

    });

    it('Fill the checkout form and Continue to Payment', async () => {

        await CheckoutActions.fillCheckoutForm({
            fullName: "Durjoy",
            telephone: "01789411875",
            address: "Dhaka cant.",
            city: "Dhaka cant.",
            country: "India",
            province: "Delhi",
            postcode: "1206"
        });

    });


    it("Select payment method and Place Order", async () => {

        await CheckoutActions.PaymentandConfirmOrder();

    });

});