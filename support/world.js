const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;

    // Add these for API testing
    this.apiContext = null;
    this.apiResponse = null;
  }
}

setWorldConstructor(CustomWorld);
