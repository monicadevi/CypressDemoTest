import AddEmployer from "../PageObject/AddAnEmployerPage"
import LoginPage from "../PageObject/LoginPage"

describe('Add employer Suite', function()
{
  beforeEach(() => {
    // runs once before all tests in the block
    cy.fixture('User').then(function(data)
    {
       this.data = data
    // //this have access to entire class
    })

    cy.fixture('EmployerDetails').then(function(info)
    {
       this.info = info
    // //this have access to entire class
    })
  })

  it('Add An Employer', function(){

    const loginPage = new LoginPage()
    const addEmployer = new AddEmployer()

    cy.visit(Cypress.env('url'))
   loginPage.getSignIn().click()
   Cypress.config('defaultCommandTime', 3000)
   loginPage.getEmail().type(this.data.validUser.email) 
   loginPage.getPassword().type(this.data.validUser.password) 
   loginPage.getlogin().click()
   Cypress.config('defaultCommandTime', 6000)
   cy.get('b').should('contains.text', 'Your employers')
   addEmployer.clickAddEmployer()
            addEmployer.searchEmployer().type(this.info.search)
            cy.get('.k-item').click(); // Assuming this is specific and doesn't need to be part of the page object
            addEmployer.setDccCategory().type(this.info.Dcc)
            addEmployer.setSPAcategory().type(this.info.SPA)
            addEmployer.clickFinalSubmit().click()
            cy.screenshot('Homepage')
  })  
  })
