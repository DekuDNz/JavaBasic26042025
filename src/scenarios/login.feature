Feature: Login functionality

    Background: Login page
        Given I am on the login page

    Scenario Outline: User can't login in successfully with invalid data
        When I enter invalid credentials with "<username>" and "<password>"
        And I click on login button
        Then I should be shown the error message "<errortext>"

        Examples:
            | username       | password      | errortext                                                                 |
            | standard_user1 | secret_sauce1 | Epic sadface: Username and password do not match any user in this service |
            |                |               | Epic sadface: Username is required                                        |
            |                | secret_sauce1 | Epic sadface: Username is required                                        |
            | standard_user1 |               | Epic sadface: Password is required                                        |

    Scenario: User login in successfully with valid data
        When I enter valid credentials with "standard_user" and "secret_sauce"
        And I click on login button
        Then I redirect to the homepage
