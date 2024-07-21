// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.get('#nav-link-accountList').click()
  cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
  cy.get('#ap_email').type(email)
  cy.get('#continue').click()
  cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
  cy.get('#ap_password').type(password)
  cy.click('#signInSubmit')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })