Feature: well formed html

    the app should have a well formed html
    - _As a_ user
    - _I want to_ view a recognizable web page
    - _In order to_ feel safe using it

    Scenario: I am visiting the home page

      Given the url http://localhost:1234/
      When I visit it
      Then should have charset UTF-8
      And should have _Proton Tasks_ on Title
      And should have a header
      And should have an h1 on the header with text _Proton Tasks_
