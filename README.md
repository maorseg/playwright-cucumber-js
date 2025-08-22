
## 🚀 Getting Started

### 1. Clone the repo

in vs code, git clone https://github.com/maorseg/playwright-cucumber-js.git
cd playwright-cucumber-js

2. Install dependencies
npm install

3. Run Tests Locally: From Terminal:
npm test

Refer to "scripts" in package.json for more running options

🧪 Writing Tests
- Feature files are written in Gherkin syntax inside the features/ folder.
- Step definitions Given/When/Then are implemented in JavaScript under step-definitions/steps.js.
- Test data is stored in JSON file (dataTest.json) for easy reuse and maintainability.
- Using the Page Object Model (POM)

📁 Example Usage

Feature File (homePage.feature)
Feature: Validate homepage

  Scenario: validate homepage is opened
    Given I open the homepage
    When I click on logo
    Then I verify homepage title

🛠️ Customization

Update dataTest.json to change URLs or expected titles.

⚙️ CI/CD Integration

All tests are automatically executed via GitHub Actions on every commit.

📃 License

This project is licensed under the MIT License