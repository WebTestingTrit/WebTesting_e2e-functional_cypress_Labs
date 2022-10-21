Feature: project list

    list my current projects
    - As a:        user with involved in projects
    - I want to:   get a list of them
    - In order to: follow up my work


  Scenario: view my projects

    Given I have two projects
    When  I visit the projects page
    Then  should show 2 items on the projects list

