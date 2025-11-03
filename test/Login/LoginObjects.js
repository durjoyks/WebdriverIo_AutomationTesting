class LoginObjects {
    get EmailInput() {
        return $("//input[@placeholder='Email']");
    }

    get PasswordInput() {
        return $("//input[@placeholder='Password']");
    }

    get LoginButton() {
        return $("//button[@class='button primary']");
    }
}

export default new LoginObjects();