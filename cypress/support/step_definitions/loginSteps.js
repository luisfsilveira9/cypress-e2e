import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/");
});

When("eu insiro o usuário {string} e a senha {string}", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
});

When("eu insiro um usuário inválido {string} e senha {string}", (invalidUsername, invalidPassword) => {
  cy.get('[data-test="username"]').type(invalidUsername);
  cy.get('[data-test="password"]').type(invalidPassword);
});

When("clico no botão de login", () => {
  cy.get('[data-test="login-button"]').click();
});

When("eu clico no botão de login sem preencher os campos", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

Then("devo ver uma mensagem de erro {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("have.text", errorMessage);
});
