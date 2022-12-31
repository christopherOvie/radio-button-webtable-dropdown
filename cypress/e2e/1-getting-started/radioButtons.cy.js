/// <reference types="cypress" />
describe('check ui elements', () => {
    
    it('check radio buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
cy.get('#male').should('be.visible')
cy.get('#female').should('be.visible')

//selecting radio buttons
cy.get('input#male').check().should('be.checked')
cy.get('#female').should('not.be.checked')

cy.get(".card-body>div>label [type='radio']").each(($el,index,$list)=>{
if(index==0){
    cy.wrap($el).click();
    
}
else{
    cy.log('wrong')
}
})
cy.get(".card-body>div>label [type='radio']").should('have.length',3)

//cy.get(".card-body>div>label [type='radio']").eq(2).check()

       
      })
    })