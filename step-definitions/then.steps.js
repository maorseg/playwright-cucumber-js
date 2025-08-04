const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const testData = require('./testData.json');

Then('I verify homepage shown', async function () {
  const title = await this.page.title();
  expect(title).toBe(testData.homepageTitle);
});


