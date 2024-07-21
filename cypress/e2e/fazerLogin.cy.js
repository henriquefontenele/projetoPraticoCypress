describe('Fazer Login', () => {

    //Abre a URL antes de cada Caso de Teste
    beforeEach(() => {
        cy.visit('/')

    })

    //Faz o login de um cadastro válido
    it('Fazer login com usuário válido', () => {
        cy.login()
    })

})