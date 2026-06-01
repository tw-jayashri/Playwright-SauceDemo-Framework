
import test, { expect } from "@playwright/test";
import alldata from '../test-data/login-data.json' with {type : 'json'};
import {LoginPage} from '../pages/LoginPage';
test.describe('Invalid Login scenarios',()=>{

    test.beforeEach(async({page}) => {
        await page.goto("https://www.saucedemo.com");
    } )
    for (const data of alldata){
        test(`verify user able to see errormsg in case of ${data.scenario}`, async({page}) =>{
            const loginPage =new LoginPage(page);
            await loginPage.login(data.username, data.password)
            await loginPage.validateErrorMsg(data.errorMsg);
        });
    }
});


