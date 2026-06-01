class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');

        this.continueBtn = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.finishBtn = page.locator('[data-test="finish"]');
        this.backHomeBtn = page.locator('[data-test="back-to-products"]');
    }

    async fillInformation(firstName, lastName, zip) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(zip);
    }

    async continue() {
        await this.continueBtn.click();
    }

    async finish() {
        await this.finishBtn.click();
    }

    async backToHome() {
        await this.backHomeBtn.click();
    }
}

module.exports = { CheckoutPage };