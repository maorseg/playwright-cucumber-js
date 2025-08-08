const { Before, After } = require('@cucumber/cucumber');
const config = require('../playwright.config');
const { chromium } = require('playwright');

Before(async function () {
  this.browser = await chromium.launch({ headless: config.use.headless });
  this.context = await this.browser.newContext({ viewport: config.use.viewport });
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
  
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});


