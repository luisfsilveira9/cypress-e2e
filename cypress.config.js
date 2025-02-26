const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createEsbuildPlugin()); // Corrigido aqui
      return config;
    },
  },
});
