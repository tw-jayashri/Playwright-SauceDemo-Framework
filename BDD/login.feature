
Feature: Login functionality for Saucedemo application


Scenario: user able to login successfully
    Given user navigate to "https://www.saucedemo.com"
    When Start to type your When step here user enter "standard_user" in "username" textbox
    And  Start to type your And step here    user enter "secret_sauce" in "password" textbox
    And  user click on login button
    Then user validate dashboard