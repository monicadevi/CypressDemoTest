class AddEmployer
{

    clickAddEmployer() {
        cy.get("#AddCategory").click();
    }
 
    searchEmployer() {
       return cy.get("#Employers")
    }
 
    setDccCategory(value) {
        return cy.get('#DefaultJobPlanCategories_0__PAsPerWeek')
    }
 
    setSPAcategory(value) {
        return cy.get('#DefaultJobPlanCategories_1__PAsPerWeek')
    }
 
    clickFinalSubmit() {
        return cy.get('#SubmitBtn')
    }
}

export default AddEmployer;