const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { request } = require('@playwright/test');
const testData = require('../../data/testData.json');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const ProductsPage = require('../pages/ProductsPage');
const ContactPage = require('../pages/ContactPage');
require('dotenv').config();

///////////
// Given //
///////////

Given('I open the homepage', async function () {
  const homePage = new HomePage(this.page);
  await homePage.open();
});

Given('I Secure login', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
});

Given('I login with email {string} and password {string}', async function (email, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});

Given('I get all products list', async function () {
  this.apiContext = await request.newContext();
  this.response = await this.apiContext.get(testData.getAllProductsList);
});

//////////
// When //
//////////

When('I click on logo', async function () {
  const homePage = new HomePage(this.page);
  await homePage.clickLogo();
});

When('I open the products page', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.openProductsPage();
});

When('I search for product {string}', async function (productName) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.searchProduct(productName);
});

When('I add product to cart', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.addProductToCart();
});

When('I click on contact us', async function () {
  const contactPage = new ContactPage(this.page);
  await contactPage.openContactForm();
});

When('I fill {string} and {string} and {string} and {string}', async function (name, email, subject, message) {
  const contactPage = new ContactPage(this.page);
  await contactPage.fillForm(name, email, subject, message);
});

When('I submit the form', async function () {
  const contactPage = new ContactPage(this.page);
  await contactPage.submitForm();
});

//////////
// Then //
//////////

Then('I verify homepage shown', async function () {
  const title = await this.page.title();
  expect(title).toBe(testData.homepageTitle);
});

Then('I verify products page shown', async function () {
  await expect(this.page.locator('#search_product')).toBeVisible();
});

Then('I verify successful login', async function () {
  await expect(this.page.getByText(testData.successfulLogin)).toBeVisible();
});

Then('I verify failed login', async function () {
  await expect(this.page.getByText(testData.failedLogin)).toBeVisible();
});

Then('I verify product added to cart', async function () {
  await expect(this.page.getByText(testData.addedToCart)).toBeVisible();
});

Then('the response status code should be {int}', function (expectedStatusCode) {
  expect(this.response.status()).toBe(expectedStatusCode);
});

Then('I verify products list returned', async function () {
  const apiResponse = await this.response.json();
  expect(Array.isArray(apiResponse.products)).toBe(true);
  expect(apiResponse.products.length).toBeGreaterThan(0);
});

Then('I verify for product {string}', async function (brand) {
  const apiResponse = await this.response.json();
  const brands = apiResponse.products.map(product => product.brand);
  expect(brands.includes(brand)).toBeTruthy();
});

Then('I verify for usertype {string} and category {string}', async function (usertype, category) {
  const apiResponse = await this.response.json();
  const matches = apiResponse.products.filter(product =>
    product.category.usertype.usertype === usertype &&
    product.category.category === category
  );
  expect(matches.length).toBeGreaterThan(0);
});

Then('I verify form submitted successfully', async function () {
  await expect(this.page.getByText('Success! Your details have been submitted successfully.')).toBeVisible();
});
