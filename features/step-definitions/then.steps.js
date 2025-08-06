const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const testData = require('../../data/testData.json');
const { selectors } = require('../../data/selectors.json');

Then('I verify homepage shown', async function () {
  const title = await this.page.title();
  expect(title).toBe(testData.homepageTitle);
});

Then('I verify products page shown', async function () {
  const page = this.page;
  await page.waitForSelector('#search_product');
  await expect(page.locator('#search_product')).toBeVisible();
});

// Then('I verify products page shown', async function () {
//   const page = this.page;
//   const searchBoxSelector = selectors.productsPage.searchBox;
//   await page.waitForSelector(searchBoxSelector);
//   await expect(page.locator(searchBoxSelector)).toBeVisible();
// });


