
import test, { expect } from "playwright/test";


import alldata from '../test-data/login-data.json' with {type : 'json'};

test.describe('Invalid Login scenarios',()=>{

    test.beforeEach(async({page}) => {
        await page.goto("https://www.saucedemo.com");
    } )
    for (const data of alldata){
        test(`verify user able to see errormsg in case of ${data.scenario}`, async({page}) =>{
            await page.getByPlaceholder("Username").fill(data.username);
            await page.getByPlaceholder("password").fill(data.password);
            await page.locator('//*[@id="login-button"]').click();
            expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(data.errorMsg);

        });
    }
});


