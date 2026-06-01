import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import errorData from '../test-data/checkout-error-data.json' with { type: 'json' };

errorData.forEach((data) => {

    test(`Checkout Validation - ${data.testName}`, async ({ page }) => {

        const login = new LoginPage(page);
        const products = new ProductsPage(page);
        const cart = new CartPage(page);
        const checkout = new CheckoutPage(page);

        // Login
        await page.goto("https://www.saucedemo.com");
        await login.login('standard_user', 'secret_sauce');

        // Add product and navigate to checkout
        await products.addProduct('sauce-labs-bolt-t-shirt');
        await products.goToCart();

        await cart.checkout();

        // Enter checkout information
        await checkout.fillInformation(
            data.firstName,
            data.lastName,
            data.zipCode
        );

        await checkout.continue();

        // Validate error message
        await expect(checkout.errorMessage)
            .toHaveText(data.expectedError);
    });

});