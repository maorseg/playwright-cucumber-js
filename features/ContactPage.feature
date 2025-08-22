Feature: validate contact form
  
  Scenario Outline: validate contact us
    Given I open the homepage
    When I click on contact us
    And I fill "<name>" and "<email>" and "<subject>" and "<message>"
    And I submit the form
    #Then I verify form submitted successfully
        Examples:
        | name  | email           | subject  | message  |
        | test1 | test1@gmail.com | test1    | test1    |
        | test2 | test2@gmail.com | test2    | test2    |