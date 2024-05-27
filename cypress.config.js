const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "br31hd",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
