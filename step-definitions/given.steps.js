const { Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const dataTest = require('./dataTest.json');
setDefaultTimeout(30 * 1000);

Given('I open the homepage', async function () {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(dataTest.homepageURL);
  this.page = page;
});


