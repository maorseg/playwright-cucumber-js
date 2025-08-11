Feature: test in dev

  @smoke
  Scenario: get all products list
    Given I get all products list
    Then the response status code should be 200
   # And I verify products list returned

    