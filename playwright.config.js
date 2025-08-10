// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.automationexercise.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};
