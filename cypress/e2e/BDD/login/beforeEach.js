beforeEach(() => {
    // runs once before all tests in the block
    cy.fixture('User').then(function(data)
    {
       this.data = data
    // //this have access to entire class
    })
  })