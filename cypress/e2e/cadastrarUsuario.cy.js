import user from '../fixtures/example.json'

describe('Cadastrar Usuario', () => {
    // const fs = require('fs');

    //Abre a URL antes de cada Caso de Teste
    beforeEach(() => {
        cy.visit('/')

    })

    //Informa dados válido para um cadastro (INCOMPLETO - AINDA EM CONSTRUÇÃO)
    it('Cadastrar Usuário Válido', () => {
        cy.get('#nav-link-accountList').click()
        cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
        cy.get('#createAccountSubmit').click()
        cy.get('.a-spacing-small').should('be.visible').contains('Criar conta')
        cy.get('#ap_customer_name').type(user.nome + " " + user.sobrenome)
        cy.get('#ap_email').type(user.email)
        cy.get('#ap_password').type(user.senha)
        cy.get('#ap_password_check').type(user.senha)
        // function replacer(key, value) {
        //     if (typeof value === "string") {
        //       return undefined;
        //     }
        //     return value;
        //   }

        // const dados = [{ "nome": "","sobrenome": "",}];
        // const jsonContent = JSON.stringify(dados, replacer, 2);
        // const arquivo = './fixtures/example.json';

        // fs.writeFile(arquivo, jsonContent, 'utf8', (err) => {
        //     if (err) {
        //         console.error('Ocorreu um erro ao gravar o arquivo JSON:', err);
        //         return;
        //     }
        //     console.log('O arquivo JSON foi criado e gravado com sucesso.');
        // });

        cy.click('#auth-continue')
        //cy.get('#cvf-input-code').type("inserir codigo de confirmacao aqui")
    })

    //Valida se a senha segue o padrão recomendado (EM CONSTRUÇÃO)
    it('Informar senha inválida', () => {
        // cy.get('#nav-link-accountList').click()
        // cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
        // cy.get('#createAccountSubmit').click()
        // cy.get('.a-spacing-small').should('be.visible').contains('Criar conta')
        // cy.get('#ap_customer_name').type(user.nome + " " + user.sobrenome)
        // cy.get('#ap_email').type(user.email)
        // cy.get('#ap_password').type(user.senha)
        // cy.get('#ap_password_check').type(user.senha)
        // cy.click('#auth-continue')
    })

    //Valida se o email informado já existe na base (EM CONSTRUÇÃO)
    it('Informar email existente', () => {
        // cy.get('#nav-link-accountList').click()
        // cy.get('.a-spacing-small').should('be.visible').contains('Fazer login')
        // cy.get('#createAccountSubmit').click()
        // cy.get('.a-spacing-small').should('be.visible').contains('Criar conta')
        // cy.get('#ap_customer_name').type(user.nome + " " + user.sobrenome)
        // cy.get('#ap_email').type(user.email)
        // cy.get('#ap_password').type(user.senha)
        // cy.get('#ap_password_check').type(user.senha)
        // cy.click('#auth-continue')
    })
})