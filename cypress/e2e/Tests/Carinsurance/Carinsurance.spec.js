import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Home from '../../../e2e/pageobjects/Home';
import Login from '../../../e2e/pageobjects/Login';
import Register from '../../../e2e/pageobjects/Register';
import RequestQuotation from '../../../e2e/pageobjects/RequestQuotation';
import RetrieveQuotation from '../../../e2e/pageobjects/RetrieveQuotation';
import Profile from '../../../e2e/pageobjects/Profile';
import EditProfile from '../../../e2e/pageobjects/EditProfile';




const home = new Home();
const login = new Login();
var register = new Register();
var requestquotation = new RequestQuotation();
var retrievequotation = new RetrieveQuotation();
var profile = new Profile();
var editProfile = new EditProfile();

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log('Cypress detected uncaught exception: ', err);
  return false;
});

Given("On the car insurance portal", () => {
    login.visit('https://demo.guru99.com/insurance/v1/index.php')
    
});

When("I enter {string} as email and {string} as password and click Login",(email,pwd) =>{
    login.loginEmailPwd(email,pwd)
});

Then("I will be logged in successfully landing on the home page",() => {
    home.validateHomePage()
});

When("I click on Register button",() =>{
    login.clickRegister()
    register.createUser()
    
});

Then("I click on the logout button and Logged out",() => {
    home.logout()
});

When("I can click on the request quotation tab", () => {
    requestquotation.clickQuotationTab()

});

Then('I can enter the details with Breakdown "([^"]*)" premium is displayed', (cover) => {
    requestquotation.calculatePremiumCover(cover)

});


