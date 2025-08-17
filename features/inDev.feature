Feature: validate contact form
  
  Scenario Outline: validate contact us
    Given I open the homepage
    When I click on contact us
    And I fill "<name>" and "<email>" and "<subject>" and "<message>"
    Then I verify "<result>"
        Examples:
        | name  | email           | subject  | message  | result                 |
        | test1 | test1@gmail.com | test1    | test1    | submitted successfully |
        | test2 | test2@gmail.com | test2    | test2    | submitted successfully |

  # await page.getByRole('link', { name: 'Contact us' }).click();
  # await page.getByRole('textbox', { name: 'Name' }).click();
  # await page.getByRole('textbox', { name: 'Name' }).fill(testDataValidations.contactUs.name);
  # await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  # await page.getByRole('textbox', { name: 'Email', exact: true }).fill(testDataValidations.contactUs.email);
  # await page.getByRole('textbox', { name: 'Subject' }).click();
  # await page.getByRole('textbox', { name: 'Subject' }).fill(testDataValidations.contactUs.subject);
  # await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  # await page.getByRole('textbox', { name: 'Your Message Here' }).fill(testDataValidations.contactUs.message);
  # await page.getByRole('button', { name: 'Submit' }).press('Enter');
  # //await expect(page.getByText(TestDataConfig.contactUs.feedbackSubmitted)).toContainText('yyyh');


    