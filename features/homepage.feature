Feature: NICE org feature
  As a user of NICE org 
  I want to be able to see guidance 

  Scenario: Load home page 
    Given I am on the NICE homepage 
    When I click on the find guidance button
    Then I should see the guidance page 
