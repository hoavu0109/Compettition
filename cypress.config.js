module.exports = {
  // baseUrl_CA: 'http://competition.tcsa-local.site/',
  // baseUrl_Admin: 'http://admin.tcsa-local.site',
  baseUrl_CA: 'https://competition.azure-uat.senecaesg.com/login',
  baseUrl_Admin: 'https://admin-tcsa.azure-uat.senecaesg.com/login',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    testIsolation : true,
  },
};
