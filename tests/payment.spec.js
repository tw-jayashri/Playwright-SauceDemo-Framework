import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import paymentData from '../test-data/payment-data.json' with { type: 'json' };

paymentData.forEach((customer) => {
test(`Checkout for ${customer.firstName} ${customer.lastName}`, async ({ page }) => {

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // LOGIN
    await page.goto("https://www.saucedemo.com");
    await login.login('standard_user', 'secret_sauce');

    // PRODUCT FLOW
    await products.sortBy('lohi');
    await products.addProduct(customer.product);
    await products.goToCart();

    // CART
    await cart.checkout();

    // CHECKOUT
    await checkout.fillInformation(
        customer.firstName,
        customer.lastName,
        customer.zipCode
    );

    await checkout.continue();
    await checkout.finish();

    // ASSERTION (important for QA interview)
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
});
});