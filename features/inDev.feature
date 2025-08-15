Feature: test in dev

  Scenario Outline: verify all categories
    Given I get all products list
    Then the response status code should be 200



    