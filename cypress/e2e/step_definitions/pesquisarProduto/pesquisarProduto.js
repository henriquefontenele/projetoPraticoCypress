//Código criado por Henrique Fontenele
//Contato: https://www.linkedin.com/in/heuriq/

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps')
//describe('Pesquisar Produto', () => {

//Abre a URL antes de cada Caso de Teste
beforeEach(() => {
  cy.visit('/')
})

Given('que eu esteja na página inicial', () => {
  //cy.visit('/');
  cy.title().should('include', "nopCommerce demo store");
});

When('eu digitar "htc" no campo de busca', () => {
  cy.get('#small-searchterms').type("htc");
});


And('clicar no botão "Pesquisar"', () => {
  cy.get('.search-box-button').click();
});

Then('eu devo ver os resultados da pesquisa para "htc"', () => {
  cy.get('.product-title').contains("HTC");
});

And('os resultados devem ser ordenados por preço', () => {
  cy.get('#products-orderby').select('Price: Low to High').should('have.value', '10');
  cy.wait(2000);
  cy.get(':nth-child(1) > .product-item > .details > .product-title > a').contains('HTC One Mini Blue');
});

// And('os resultados devem ser filtrados por categoria', () => {
//   cy.get('#advs').click();
//   cy.get('#cid > option:nth-child(5)').click();
//   cy.get('.search-button').click();
//   cy.get('.product-title').should('have.string', 'Sound Forge');
// });

// Then('eu devo ver uma mensagem de "{alerta}"', (alerta) => {
//   cy.get('.no-result').should('have.string', alerta);
// })
//});