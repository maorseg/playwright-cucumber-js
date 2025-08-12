Feature: validate products page
  @smoke
  Scenario: validate products page is opened
    Given I open the homepage
    When I open the products page
    Then I verify products page shown

  @smoke
  Scenario Outline: search and add various products to cart
    Given I open the homepage
    When I open the products page
    And I search for product "<product>"
    And I add product to cart
    Then I verify product added to cart
 
   Examples:
    | product                                    |
    | blue top                                   |
    | Pure Cotton Neon Green Tshirt              |
    | Half Sleeves Top Schiffli Detailing - Pink |
    | Sleeves Printed Top - White                |
    | Sleeves Top and Short - Blue & Pink        |

  @smoke
  Scenario: get all products list
    Given I get all products list
    Then the response status code should be 200
    And I verify products list returned