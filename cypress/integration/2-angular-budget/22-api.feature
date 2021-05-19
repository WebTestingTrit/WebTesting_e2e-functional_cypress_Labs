Feature: we have an API

  the api responds correctly


  Scenario: Asking for projects

    Given the app uses an API
    When  make a get request
    Then  should get an array with 1 or more items

  Scenario: Deleting a project

    Given the app uses an API
    When  make a delete request
    Then  should get either a deleted or not found response

