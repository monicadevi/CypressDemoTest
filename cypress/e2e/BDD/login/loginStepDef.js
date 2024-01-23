///<refernce types = ""/>
import LoginPage from "../../PageObject/LoginPage";
import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = new LoginPage()

Given('I should navigate to website',() =>
{
    cy.visit(Cypress.env('url'))
})

// When('Click on Signin and add valid username and Password',function()
// {
//     loginPage.getSignIn().click()
//     Cypress.config('defaultCommandTime', 3000)
//     loginPage.getEmail().type(this.data.validUser.email)
//     loginPage.getPassword().type(this.data.validUser.password)
// })

When('Click on Signin and add valid username and Password',function(dataTable)
{
    loginPage.getSignIn().click()
    Cypress.config('defaultCommandTime', 3000)
    loginPage.getEmail().type(dataTable.rawTable[1][0])
    loginPage.getPassword().type(dataTable.rawTable[1][1])
})

When('Click on submit button and',()=>{

    loginPage.getlogin().click()

})

Then('verify the login', function()
{
    cy.get('b').should('contains.text', 'Your employers')
})

When('Click on Signin and add invalid username and Password',function()
{
    loginPage.getSignIn().click()
    Cypress.config('defaultCommandTime', 3000)
    loginPage.getEmail().type(this.data.invalidUser.email)
    loginPage.getPassword().type(this.data.invalidUser.password)
})

Then('verify the invalid login', function()
{
    cy.get('.text-error-heading').should('contains.text','Details not recognised')
})


