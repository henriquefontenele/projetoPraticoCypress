describe('Pesquisar Produto', () => {

  beforeEach( () => {

    cy.visit('/')
  
  })

  it('Pesquisar Produto Existente', () => {
    //cy.visit('/')
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-action="puis-card-container-declarative"]').contains('bola')
  })

  it('Filtrar Produto Existente', () => {
    //cy.visit('/')
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('#p_n_feature_two_browse-bin> .a-list-item > .a-link-normal > .a-size-base').click()
    cy.get('[data-action="puis-card-container-declarative"]').contains('bola')

  })

  it('Ordenar Produto Existente', () => {
    //cy.visit('/')
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('#a-nostyle a-list-link').click()
    cy.get('#s-result-sort-select_1').click()    
    cy.get('[data-action="puis-card-container-declarative"]').contains('bola')   
  })

  it('Pesquisar Produto Inexistente', () => {
    //cy.visit('/')
    cy.get('#twotabsearchtextbox').type('cachorro')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-action="puis-card-container-declarative"]').contains('cachorro')
  })

  it('Pesquisar Produto em Branco', () => {
    //cy.visit('/')
    cy.get('#nav-search-submit-button').click()
    cy.get('.as-title-block > .as-title-block-left > .a-color-base').contains('Compre ofertas por categoria')
  })

 


})