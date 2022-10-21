const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    baseUrl: 'http://localhost:1234/',
  },
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: false,
    html: true,
    json: true,
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*.feature'],
  },
})
