//Código criado por Henrique Fontenele
//Contato: https://www.linkedin.com/in/heuriq/

Cypress.Commands.add('login', (email, password) => {
  cy.get('#nav-link-accountList').click()
  cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
  cy.get('#ap_email').type(email)
  cy.get('#continue').click()
  cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
  cy.get('#ap_password').type(password)
  cy.click('#signInSubmit')
})

Cypress.Commands.add('validarPincode', (pincode) => {
  const superagent = require('superagent')
  const mailsac_api_key = 'k_2jON4AEV6YlG5IB1TSPbNIQaUQa8z2lylWszKxI20'

  superagent
    .get('https://mailsac.com/api/addresses/superqa@mailsac.com/messages')
    .set('Mailsac-Key', mailsac_api_key)
    .then((messages) => {
      const messageId = messages.body[0]._id
      superagent
        .get('https://mailsac.com/api/text/superqa@mailsac.com/' + messageId)
        .set('Mailsac-Key', mailsac_api_key)
        .then((messageText) => {
          console.log(messageText.text)
        })
    })
    .catch(err => {
      console.log(err.message)
    })

})
