Feature: Validate login

  # Scenario: validate Secure login
  #   Given I open the homepage
  #   And I Secure login
  #   Then I verify <result> login

  #   Examples:
  #   | result     |
  #   | successful |

  Scenario Outline: Validate login success and failure
    Given I open the homepage
    And I login with email "<email>" and password "<password>"
    Then I verify <result> login

  Examples:
    | email                            | password     | result     |
    | automationexercisetest@gmail.com | qwerty1234!  | successful |
    | wronguser@gmail.com              | wrongpass123 | failed     |