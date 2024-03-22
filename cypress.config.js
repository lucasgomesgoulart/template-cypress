const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  // video: true,
  experimentalMemoryManagement: true,
  viewportWidth: 1440,
  viewportHeight: 854,
  numTestsKeptInMemory: 1,
  chromeWebSecurity: false,
  on: {
    before: (browser = {}, launchOptions) => {
      console.log(launchOptions.args);

      if (browser.name === 'chrome') {
        launchOptions.args.push('--disable-gpu');
      }

      return launchOptions;
    },
  },

  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});