import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com");
    await loginPage.login("standard_user", "secret_sauce");
});

test("sort products by price (low to high)", async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy("Price (low to high)");
});

test("sort products by price (high to low)", async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy("Price (high to low)");
});

test("sort products by name (A to Z)", async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy("Name (A to Z)");
});

test("sort products by name (Z to A)", async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy("Name (Z to A)");
});