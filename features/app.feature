Feature: APP operations

  Scenario: Create a resource
    Given I have a new resource
    When I create the resource
    Then the resource should be created

  Scenario: Read a resource
    Given I have a created resource
    When I read the resource
    Then the resource should be read

  Scenario: Update a resource
    Given I have a created resource
    When I update the resource
    Then the resource should be updated

  Scenario: Delete a resource
    Given I have a created resource
    When I delete the resource
    Then the resource should be deleted