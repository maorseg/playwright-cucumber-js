const { When } = require('@cucumber/cucumber');
const { selectors } = require('../../data/selectors.json');

When('I click on logo', async function () {
    await this.page.getByRole('link', { name: 'Website for automation' }).click();
});

When('I open the products page', async function () {
    await this.page.getByRole('link', { name: 'products' }).click();
});


