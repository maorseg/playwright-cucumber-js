const { When } = require('@cucumber/cucumber');
const testData = require('../../data/testData.json');

When('I click on logo', async function () {
    await this.page.getByRole('link', { name: 'Website for automation' }).click();
});

When('I open the products page', async function () {
    await this.page.getByRole('link', { name: 'products' }).click();
});

When('I search product', async function () {
    await this.page.click('#search_product');
    await this.page.fill('#search_product', testData.blueTop); 
    await this.page.click('#submit_search');
});

When('I add product to cart', async function () {
    await this.page.getByRole('link', { name: 'View Product' }).click();
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
});


