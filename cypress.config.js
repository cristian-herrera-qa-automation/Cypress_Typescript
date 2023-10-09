const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yhgnzp",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure: false,
   // pageLoadTimeout: 5000,
    video: false,
    experimentalRunAllSpecs:true
  },
});
