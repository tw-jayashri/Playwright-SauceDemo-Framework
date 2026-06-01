
const {expect} = require('@playwright/test');

class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("username");
        this.password = page.getByPlaceholder("password");
        this.loginbutton = page.locator('//*[@id="login-button"]');
        this.errormsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }
        
    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async validateErrorMsg(expectedErrorMsg){
        await expect(this.errormsg).toHaveText(expectedErrorMsg);
    }
}
module.exports = {LoginPage};



