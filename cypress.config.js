const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'm5cek5',
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true, 
      json: true,
      reportFilename: "mochawesome",
      saveJson: true,
      saveHtml: true
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      return config;
    },
  },
});
