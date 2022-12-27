/// <reference types="Cypress" />///

describe('Page Content Loads Correctly', () => {
  it('Finds the words "Associate Teacher"', ()=>{
      cy.visit('https://www.rodvel-site.net')

      cy.contains("Associate Teacher")
  })

  it('Checks for Visitor Counter', ()=>{
      cy.visit('https://www.rodvel-site.net')

      cy.contains('Visitors')

      cy.get('[id=counter]')
      .invoke('text')
      .should('match', /^[0-9]*$/)
  })
})