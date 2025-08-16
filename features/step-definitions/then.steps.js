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

Then('the response status code should be {int}', function (expectedStatusCode) {
   expect(this.response.status()).toBe(expectedStatusCode);
});

Then('I verify products list returned', async function () {
   const apiResponse = await this.response.json();
   expect(Array.isArray(apiResponse.products)).toBe(true);
   expect(apiResponse.products.length).toBeGreaterThan(0);
 });

Then('I verify for product {string}', async function (brand) {
  const apiResponse = await this.response.json();
  // console.log(apiResponse);
  const brands = apiResponse.products.map(product => product.brand);
  expect(brands.includes(brand)).toBeTruthy();
});

Then('I verify for usertype {string} and category {string}', async function (usertype, category) {
  const apiResponse = await this.response.json();
  const matches = apiResponse.products.filter(product =>
    product.category.usertype.usertype === usertype &&
    product.category.category === category
  );
  expect(matches.length).toBeGreaterThan(0);
});

