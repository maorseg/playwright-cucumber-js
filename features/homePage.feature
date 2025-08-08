Feature: validate homepage
  @smoke
  Scenario: validate homepage is opened
    Given I open the homepage
    When I click on logo
    Then I verify homepage shown