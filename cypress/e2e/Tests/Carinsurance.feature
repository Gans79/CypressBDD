Feature: Test Car Insurance

Scenario: Login registered user successfully 
 Given On the car insurance portal
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login  
 Then I will be logged in successfully landing on the home page

Scenario: Create a new user via the Registration process
 Given On the car insurance portal
 When I click on Register button
 Then I enter the required information and click Register 

Scenario: Logout registered user successfully 
 Given On the car insurance portal
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login 
 Then I click on the logout button and Logged out

Scenario Outline: User is able to request a car insurance quotation
 Given On the car insurance portal
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

Scenario: User is able to save a car insurance quotation
 Given On the car insurance portal
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login 
 Then I will be logged in successfully landing on the home page
 When I can click on the request quotation tab
 When I can enter the details on the quotation page and click save quotation  
 Then quotation is saved and displayed to the user

Scenario: User is able to Retrieve a car insurance quotation
 Given On the car insurance portal
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login
 Then I will be logged in successfully landing on the home page
 When I can click on the retrieve quotation tab
 When I enter the quotation identification number as "idnumber" it is displayed








 
