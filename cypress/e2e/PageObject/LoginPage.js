class LoginPage
{
    
    getSignIn()
    {
        return cy.get("li[class='divide account divider-rigth'] a")
        //return cy.get("cy.get('.account > a')")
    }

    getEmail()
    {
       return cy.get("#Username")
    }

    getPassword()
    {
        return cy.get("#Password")
    }

    getlogin()
    {
        return cy.get("button[value='login']")
    }

}

export default LoginPage;