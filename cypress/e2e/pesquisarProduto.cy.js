describe('Pesquisar Produto', () => {

  //Abre a URL antes de cada Caso de Teste
  beforeEach(() => {
    cy.visit('/')

  })

  //Pesquisa um produto existente
  it('Pesquisar Produto Existente', () => {
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-cy="title-recipe"]').contains('bola')
  })

  //Filtra um produto existente por uma categoria de faixa etária
  it('Filtrar Produto Existente', () => {
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-declarative').contains('Criança grande').click()
    cy.get('[data-cy="title-recipe"]').contains('Bola Futsal Raccer 200 Sub 13 (11/13 Anos) Infantil Cor:Branco')
  })

  //Ordena um produto existente do preço do menor para o maior
  it('Ordenar Produto Existente', () => {
    cy.get('#twotabsearchtextbox').type('bola')
    cy.get('#nav-search-submit-button').click()
    cy.get('#a-autoid-0-announce').click()
    cy.get('#s-result-sort-select_1').click()
    cy.get('[data-cy="title-recipe"]').contains('Bola de Ping Pong, Plástico Branca, Yins, Kit com 06 Unidades')
  })

  //Pesquisa um produto inexistente
  it('Pesquisar Produto Inexistente', () => {
    cy.get('#twotabsearchtextbox').type('xyhwr')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-row').contains('Nenhum resultado para')
  })

  //Pesquisa em branco
  it('Pesquisar Produto em Branco', () => {
    cy.get('#nav-search-submit-button').click()
    cy.get('.as-title-block-left').contains('Compre ofertas por categoria')
  })
})