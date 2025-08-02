const { Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Given('I open the homepage', async function () {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
});
