const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const testData = require('../../data/testData.json');

Then('I verify homepage shown', async function () {
  const title = await this.page.title();
  expect(title).toBe(testData.homepageTitle);
});

Then('I verify products page shown', async function () {
  const page = this.page;
  await page.waitForSelector('#search_product');
  await expect(page.locator('#search_product')).toBeVisible();
});

 Then('I verify successful login', async function () {
   const page = this.page;
   await expect(page.getByText(testData.successfulLogin)).toBeVisible();
 });

Then('I verify failed login', async function () {
   const page = this.page;
   await expect(page.getByText(testData.failedLogin)).toBeVisible();
 });

Then('I verify product added to cart', async function () {
   const page = this.page;
    await expect(page.getByText(testData.addedToCart)).toBeVisible();
 });
 

