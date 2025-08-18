const { When } = require('@cucumber/cucumber');
const testData = require('../../data/testData.json');

When('I click on logo', async function () {
    await this.page.getByRole('link', { name: 'Website for automation' }).click();
});

When('I open the products page', async function () {
    await this.page.getByRole('link', { name: 'products' }).click();
});

When('I search for product {string}', async function (string) {
    await this.page.click('#search_product');
    await this.page.fill('#search_product', string); 
    await this.page.click('#submit_search');
});

When('I add product to cart', async function () {
    await this.page.getByRole('link', { name: 'View Product' }).click();
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
});

When('I click on contact us', async function () {
    await this.page.getByRole('link', { name: 'Contact us' }).click(); 
});

When('I fill {string} and {string} and {string} and {string}', async function (name, email, subject, message) {
     await this.page.getByRole('textbox', { name: 'Name' }).click();
     await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
     await this.page.getByRole('textbox', { name: 'Email', exact: true }).click();
     await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
     await this.page.getByRole('textbox', { name: 'Subject' }).click();
     await this.page.getByRole('textbox', { name: 'Subject' }).fill(subject);
     await this.page.getByRole('textbox', { name: 'Your Message Here' }).click();
     await this.page.getByRole('textbox', { name: 'Your Message Here' }).fill(message);
});

When('I submit the form', async function () {
    await this.page.getByRole('button', { name: 'Submit' }).press('Enter');
});


