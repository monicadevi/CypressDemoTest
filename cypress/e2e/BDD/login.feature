Feature: End to End login validation

    application Regression
     @Regression
    Scenario: Login successfull
    Given I should navigate to website
    When  Click on Signin and add valid username and Password
            |email|password|
            |enstudent@bma.org.uk|lookafterdoctors|
    When  Click on submit button and
    Then  verify the login

    @Smoke
    Scenario: Login unsuccessfull
    Given I should navigate to website
    When  Click on Signin and add invalid username and Password
    When  Click on submit button and
    Then  verify the invalid login

 