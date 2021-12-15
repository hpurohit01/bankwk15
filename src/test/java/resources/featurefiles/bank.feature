Feature: Bank Test

  As a user I want to verify xyz bank account functionalities
  @smoke
  Scenario: User as a bank manager should able to add customer successfully
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter First name "Hemal" to First Name field
    And I enter Last Name "Purohit" to Last Name Field
    And I enter Postcode "WD17 9AP" to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully" message
    And I should be able to click OK button on popup
 @sanity
  Scenario: User as a bank manager should able to open account successfully
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter user First name "Hemal" to First Name field
    And I enter user Last Name "Purohit" to Last Name Field
    And I enter  user Postcode "WD17 9AP" to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully" message
    And I should be able to click OK button on popup
    When I click on Open Account tab
    And I select "Hemal Purohit" customer name which added before
    And I select currency "Pound"
    And I click on Process button
    Then I am able to see popup display with "Account created successfully" message
    And I should be able to click OK button on popup
@smoke,@sanity
  Scenario: User should be able to login into the account logout from the account successfully
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter First name1 "Hemal" to First Name field
    And I enter Last Name1 "Purohit" to Last Name Field
    And I enter Postcode1 "WD17 9AP" to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully" message
    And I should be able to click OK button on popup
    When I click on Open Account tab
    And I select "Hemal Purohit" customer name which added before
    And I select currency "Pound"
    And I click on Process button
    Then I am able to see popup display with "Account created successfully" message
    And I should be able to click OK button on popup
    When I click on home button
    And I click on Customer Login button
    And I select1 "Hemal Purohit" customer name which added before
    And I click on login button
    Then I should be able to verify "Logout" tab displayed
    And I should be able able to verify customer name2 "Hemal Purohit"
    And I should able to click logout button

  @regression
  Scenario: User as customer should be able to to deposit money to the account
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter First name3 "Hemal" to First Name field
    And I enter Last Name3 "Purohit" to Last Name Field
    And I enter Postcode3 "WD17 9AP " to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully" message
    And I should be able to click OK button on popup
    When I click on Open Account tab
    And I select1 "Hemal Purohit" customer name which added before
    And I select currency "Pound"
    And I click on Process button
    Then I am able to see popup display with "Account created successfully" message
    And I should be able to click OK button on popup
    When I click on home button
    And I click on Customer Login button
    And I select3 "Hemal Purohit" customer name which added before
    And I click on login button
    And I click on Deposit tab
    And I enter amount "100"
    And I click on Deposit button
    Then I should able to verify message "Deposit Successful"


  @regression
  Scenario: User as a customer should be able to withdraw money successfully
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter First name4 "Hemal" to First Name field
    And I enter Last Name4 "Purohit" to Last Name Field
    And I enter Postcode4 "WD17 9AP" to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully" message
    And I should be able to click OK button on popup
    When I click on Open Account tab
    And I select4 "Hemal Purohit" customer name which added before
    And I select currency "Pound"
    And I click on Process button
    Then I am able to see popup display with "Account created successfully" message
    And I should be able to click OK button on popup
    When I click on home button
    And I click on Customer Login button
    And I select4 "Hemal Purohit" customer name which added before
    And I click on login button
    And I click on Deposit tab
    And I enter amounts "100"
    And I click on Deposit button
    Then I should able to verify message "Deposit Successful"
    When I click on Withdraw tab
    And I enter amount "50" in amount to be withdrawn field
    And I click Withdraw tab
    Then I should able to verify withdrawn message "Transaction successful"
