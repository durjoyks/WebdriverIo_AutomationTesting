import LoginObjects from './LoginObjects.js';

class LoginActions {

    async openLoginPage() {
        await browser.url('https://demo.evershop.io/account/login');
        await browser.maximizeWindow();
        await LoginObjects.EmailInput.waitForDisplayed({ timeout: 10000 });
    }

    async login(email, password) {
        await LoginObjects.EmailInput.setValue(email);
        await LoginObjects.PasswordInput.setValue(password);
        await LoginObjects.LoginButton.click();
        await browser.pause(2000); // small wait for page to load
    }
}

export default new LoginActions();