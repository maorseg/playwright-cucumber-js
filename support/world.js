const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async init() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);