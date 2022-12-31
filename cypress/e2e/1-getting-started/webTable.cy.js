/// <reference types="cypress" />


describe('web table', () => {
  beforeEach(() => {
    
    cy.visit('https://the-internet.herokuapp.com/tables')
  })

   

    it('check value if present in the table', () => {
      cy.get("#table1[class='tablesorter").contains('http://www.jdoe.com').should('be.visible')
      
    })

    it('check values present in specific row and column', () => {
      cy.get("#table1[class='tablesorter']>tbody>tr:first-child>td:nth-child(3)").contains('td','jsmith@gmail.com').should('be.visible')
    })
  })

