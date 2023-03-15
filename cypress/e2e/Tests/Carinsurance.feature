Feature: Test Car Insurance

Scenario: Login registered user successfully 
 Given On the car insurance portal
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login  
 Then I will be logged in successfully landing on the home page

Scenario: Create a new user via the Registration process
 Given On the Car insurance Portal
 When I click on Register button
 And I enter the required information and click Register 
 Then I will be registered as a user in the portal

Scenario: Logout registered user successfully 
 Given I am on the Car insurance Portal 
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login 
 Then I click on the logout button and Logged out

Scenario Outline: User is able to request a car insurance quotation
 Given On the Car insurance Portal 
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login 
 Then I will be logged in successfully landing on the home page
 When I can click on the request quotation tab
 Then I can enter the details with Breakdown <cover> premium is displayed

 Examples:
     |cover    | 
     |No cover |
     |Roadside |
     |At home  |
     |European |







 
