const { Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const testData = require('../../data/testData.json');
const { request } = require('@playwright/test');
require('dotenv').config();
setDefaultTimeout(30 * 1000);

Given('I open the homepage', async function () {
    await this.page.goto(testData.homepageURL);
});

Given('I Secure login', async function () {
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(process.env.EMAIL);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD);
    await this.page.getByRole('button', { name: 'Login' }).click();
});

Given('I login with email {string} and password {string}', async function (email, password) {
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
});

Given('I get all products list', async function () {
 this.apiContext = await request.newContext();
  this.response = await this.apiContext.get(testData.getAllProductsList);
});


