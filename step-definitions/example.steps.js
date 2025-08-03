const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30 * 1000);

Given('I open the homepage', async function () {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  this.page = page;

});

Then('I verify homepage title', async function () {
  const title = await this.page.title();
  expect(title).toBe('Example Domain');
});

