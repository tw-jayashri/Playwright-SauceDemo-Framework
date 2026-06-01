class ProductsPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    // 🔽 SORT PRODUCTS
    async sortBy(value) {
        await this.sortDropdown.selectOption(value);
    }

    // 🛒 ADD ANY PRODUCT (DYNAMIC)
    async addProduct(productName) {
        await this.page.locator(
            `[data-test="add-to-cart-${productName}"]`
        ).click();
    }

    // 🛒 REMOVE ANY PRODUCT (DYNAMIC)
    async removeProduct(productName) {
        await this.page.locator(
            `[data-test="remove-${productName}"]`
        ).click();
    }

    // 🛍 GO TO CART
    async goToCart() {
        await this.cartLink.click();
    }
}

module.exports = { ProductsPage };