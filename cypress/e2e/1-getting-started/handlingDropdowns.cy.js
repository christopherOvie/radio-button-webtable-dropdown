
describe('handle dropdowns', () => {
    
    it.skip('dropdown using select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Afghanistan')
        .should('have.value','Afghanistan')  //use have.value fr select
        //.contains('Afghanistan')
      })

      it.skip('using without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
          cy.get('#select2-billing_country-container').click()

          cy.get('.select2-search__field').type('Iran').type('{enter}')
          cy.get('#select2-billing_country-container').should('have.text','Iran')
      
      })

      it.skip('using auto suggestion dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
         cy.get('#searchInput').type('Nigeria') 
         cy.get('.suggestion-link').contains('n Civil War').click()
      })

      it('using auto dynamic dropdown', () => {
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()

        cy.get("input[name='q']").type('cypress Automation')
        cy.get("div[class='wM6W7d']>span").should('have.length','11')
//$mean array
        //cy.get("div[class='wM6W7d']>span").contains('cypress automation')  correct
        cy.get("div[class='wM6W7d']>span").each(($el,index,$list)=>{

            if($el.text()=='cypress Automation'){//$el rep eleme
               // cy.wrap($el.click())
                cy.wrap($el).click()

            }
        })

      })
    })