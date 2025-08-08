Feature: validate products page
  @smoke
  Scenario: validate products page is opened
    Given I open the homepage
    When I open the products page
    Then I verify products page shown