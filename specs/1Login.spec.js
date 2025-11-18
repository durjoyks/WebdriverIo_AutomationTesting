import LoginActions from '../test/LogIn/LoginActions.js';
import assert from 'assert';
import loginData from '../test/data/loginData.json' assert { type: 'json' };

describe('Evershop Login Flow', () => {

    beforeEach(async () => {
        await browser.reloadSession(); // new session every test
        await LoginActions.openLoginPage();
    });

    
    it('Login with valid credentials', async () => {
        await LoginActions.login(loginData.valid.email, loginData.valid.password);
        await browser.pause(2000); // wait for redirect 
        const currentUrl = await browser.getUrl();
        assert.strictEqual(currentUrl, 'https://demo.evershop.io/', 'User should be redirected to homepage');
    });

    it('Login with invalid email', async () => {
        await LoginActions.login(loginData.invalidEmail.email, loginData.invalidEmail.password);
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });

    it('Login with wrong password', async () => {
        await LoginActions.login(loginData.wrongPassword.email, loginData.wrongPassword.password);
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });

    it('Login with empty fields', async () => {
        await LoginActions.login('', '');
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });

    it('Login with invalid email format', async () => {
        await LoginActions.login(loginData.invalidFormat.email, loginData.invalidFormat.password);
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });
});