@register @E2E
Feature: To Validate the facebook login Functionallity

Background:
Given The user should be in facebook page

@regression
Scenario: Invalid Register-To Validate the Registration Functionallity

When  The user has to click the create new account button
And  The user has to fill the firstname,lastName and other details
And  The user has to click the submit button
Then The user should be get successfully registered meassage

@retest @regression
Scenario: Valid Register-To Validate the Registration Functionallity

When  The user has to click the create new account button
And  The user has to fill the firstname,lastName and other details
And  The user has to click the submit button
Then The user should be get successfully registered meassage

