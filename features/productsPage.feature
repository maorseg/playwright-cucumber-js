Feature: validate products page
  @smoke
  Scenario: validate products page is opened
    Given I open the homepage
    When I open the products page
    Then I verify products page shown

  @smoke
  Scenario: Validate product can be added to cart
    Given I open the homepage
    When I open the products page
    And I search product
    And I add product to cart
    Then I verify product added to cart
 