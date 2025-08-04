const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const dataTest = require('./dataTest.json');

Then('I verify homepage shown', async function () {
  const title = await this.page.title();
  expect(title).toBe(dataTest.homepageTitle);
});


