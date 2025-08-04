const { When } = require('@cucumber/cucumber');
const { selectors } = require('./selectors.json');

When('I click on logo', async function () {
    // await this.page.getByRole('link', { name: selectors. }).click();
    await this.page.getByRole('link', { name: 'Website for automation' }).click();
});
