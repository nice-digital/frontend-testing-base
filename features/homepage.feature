Feature: NICE org feature
  As a user of NICE org 
  I want to be able to see guidance 

  Scenario: Load home page 
    Given I open the url "https://www.nice.org.uk/"
    When I click on the link "Find NICE guidance"
    Then I expect that the path is "/guidance"
    And I expect that element "h1" matches the text "Find guidance"
    And I expect that the title is "Guidance | NICE"
