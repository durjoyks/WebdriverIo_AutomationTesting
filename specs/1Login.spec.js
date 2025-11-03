import LoginActions from 'd:/SQA/WevderiverIO/test/LogIn/LoginActions.js';
import assert from 'assert';

describe('Evershop Login Flow', () => {

    beforeEach(async () => {
        await browser.reloadSession(); // new session every test
        await LoginActions.openLoginPage();
    });

    it('Login with valid credentials', async () => {
        await LoginActions.login('durjoyks261@gmail.com', 'durjoyks261');
        await browser.pause(2000); // wait for redirect 
        const currentUrl = await browser.getUrl();
        assert.strictEqual(currentUrl, 'https://demo.evershop.io/', 'User should be redirected to homepage');
    });

    it('Login with invalid email', async () => {
        await LoginActions.login('wronguser@example.com', 'validpassword123');
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });

    it('Login with wrong password', async () => {
        await LoginActions.login('durjoyks261@gmail.com', 'wrongpassword');
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
        await LoginActions.login('invalidemail', 'somepassword');
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        assert.ok(currentUrl.includes('/account/login'), 'User should remain on login page');
    });
});