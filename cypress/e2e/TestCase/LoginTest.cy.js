import LoginPage from "../PageObject/LoginPage";

describe('Login Suite', function()
{
  beforeEach(() => {
    // runs once before all tests in the block
    cy.fixture('User').then(function(data)
    {
       this.data = data
    // //this have access to entire class
    })
  })

  it('Login Pass', function(){
    const loginPage = new LoginPage()

    cy.visit(Cypress.env('url'))
    
   Cypress.config('defaultCommandTime', 6000)
   loginPage.getSignIn().click()
   loginPage.getEmail().type(this.data.validUser.email) 
   loginPage.getPassword().type(this.data.validUser.password) 
   loginPage.getlogin().click()
   Cypress.config('defaultCommandTime', 6000)
   cy.get('b').should('contains.text', 'Your employers');
   cy.screenshot('Homepage')
  })  

   it('Login Fail', function(){
        const loginPage = new LoginPage()
  
        cy.visit(Cypress.env('url'))
        
       loginPage.getSignIn().click()
       loginPage.getEmail().type(this.data.invalidUser.email)
       loginPage.getPassword().type(this.data.invalidUser.password) 
       loginPage.getlogin().click()
       cy.get('.text-error-heading').should('contains.text','Details not recognised');
    })  



  })
