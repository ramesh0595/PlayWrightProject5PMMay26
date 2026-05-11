@login @E2E
Feature: To Validate the facebook login Functionallity

Background:
Given The user should be in facebook page

@smoke @regression
Scenario: Invalid Login-To validate the login functionallity with Invalid Credentials

When  The user has to fill the username "ramesh@gmail.com" and password "52345672"
And The user has to click the login button
Then The user should be navigate to invalid login page

@sanity @regression
Scenario: Valid Login-To validate the login functionallity with Invalid Credentials

When  The user has to fill the username "manoj@gmail.com" and password "42345672"
And The user has to click the login button
Then The user should be navigate to invalid login page