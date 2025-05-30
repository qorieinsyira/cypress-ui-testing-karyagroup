const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s7g1wb", // tetap ada kalau perlu
  e2e: {
    // baseUrl: "http://apergu.co.id:8900/api/v1", // untuk API test
    baseUrl: "https://sales-app-apergu.vercel.app", // untuk UI test

    video: true, // ✅ Aktifkan perekaman video
    screenshotOnRunFailure: true, // ✅ Ambil screenshot kalau test gagal

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/ui/**/*.cy.{js,jsx,ts,tsx}",
  },
});
