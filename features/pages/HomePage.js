const testData = require('../../data/testData.json');

class HomePage {
  constructor(page) {
    this.page = page;
    this.url = testData.homepageURL;
    this.logo = page.getByRole('link', { name: 'Website for automation' });
  }

  async open() {
    await this.page.goto(this.url);
  }

  async clickLogo() {
    await this.logo.click();
  }
}
module.exports = HomePage;
