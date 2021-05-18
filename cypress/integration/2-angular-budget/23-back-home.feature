Feature: visiting home waits for data

  the app waits for the data


  Scenario: calling a API endpoint

    Given the app calls an endpoint
    When  a request is sent
    Then  should wait for it


