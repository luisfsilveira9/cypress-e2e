Feature: Login no SauceDemo

  Scenario: Login bem-sucedido com usuário válido
    Given que estou na página de login
    When eu insiro o usuário "standard_user" e a senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a página de produtos

  Scenario: Login falha com credenciais inválidas
    Given que estou na página de login
    When eu insiro um usuário inválido "usuario_invalido" e senha "senha_errada"
    And clico no botão de login
    Then devo ver uma mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Scenario: Tentativa de login sem preencher os campos
    Given que estou na página de login
    When eu clico no botão de login sem preencher os campos
    Then devo ver uma mensagem de erro "Epic sadface: Username is required"
