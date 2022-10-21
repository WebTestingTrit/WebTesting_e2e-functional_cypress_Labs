Feature: sents a post with th data

  the app submits the form data to the API


  Scenario: calling a API endpoint

    Given a form linked to an API endpoint
    When the form is submitted
    Then  should send data to the API


