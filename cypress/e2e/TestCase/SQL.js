context ('Window',() =>
{
    it('Database Interaction',()=>{

        cy.sqlServer("Select * from Employers").then(function(result)
        {
               console.log(result[15][[7]])
        })
    })
})