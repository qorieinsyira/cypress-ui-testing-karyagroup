const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1ajvzp", // tetap ada kalau perlu
  e2e: {
    // baseUrl: "http://apergu.co.id:8900/api/v1", // untuk API test
    baseUrl: "https://sales-app-apergu.vercel.app", // untuk UI test

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // biar semua test kebaca
  },
});
