
## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/maorseg/playwright-cucumber-js.git
cd playwright-cucumber-js

2. Install dependencies
npm install

3. Run tests
npm test

🧪 Writing Tests
Feature files are written in Gherkin syntax inside the features/ folder.
Step definitions are implemented in JavaScript under step-definitions/.
Test data and selectors are stored in JSON files (dataTest.json, selectors.json) for easy reuse and maintainability.

📁 Example Usage

Feature File (homePage.feature)
Feature: Validate homepage

  Scenario: validate homepage is opened
    Given I open the homepage
    When I click on logo
    Then I verify homepage title

🛠️ Customization

Update dataTest.json to change URLs or expected titles.
Modify selectors.json to centralize and manage UI element references.

📃 License
This project is licensed under the MIT License.