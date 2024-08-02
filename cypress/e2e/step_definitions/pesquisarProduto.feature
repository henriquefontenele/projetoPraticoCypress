# Código criado por Henrique Fontenele
# Contato: https://www.linkedin.com/in/heuriq/
@Principal
Feature: Pesquisar Produto
Eu desejo fazer uma pesquisa de um produto qualquer no site

  Scenario: Pesquisar Produto Existente
    Given que eu esteja na página inicial
    When eu digitar "htc" no campo de busca
    And clicar no botão "Pesquisar"
    Then eu devo ver os resultados da pesquisa para "htc"

  Scenario: Ordenar Produto Existente
    Given que eu esteja na página inicial
   When eu digitar "htc" no campo de busca
    And clicar no botão "Pesquisar"
   Then eu devo ver os resultados da pesquisa para "htc"
   And os resultados devem ser ordenados por preço

#  Scenario: Filtrar Produto Existente
 #   Given que eu esteja na página inicial
  #  When eu digitar "sound" no campo de busca
   # And clicar no botão "Pesquisar"
  #  Then eu devo ver os resultados da pesquisa para "sound"
   # And os resultados devem ser filtrados por categoria

#  Scenario: Pesquisar um produto inexistente
 #   Given que eu esteja na página inicial
  #  When eu digitar "Inexistente" no campo de busca
   # And clicar no botão "Pesquisar"
   # Then eu devo ver uma mensagem de "No products were found that matched your criteria"
