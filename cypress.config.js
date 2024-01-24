const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require("cypress-sql-server");

async function setupNodeEvents(on, config) {
  config.db = {                                           //Database config
    userName: "bmaadmin",
    password: "Adm1n1$trat0r",
    server: "p1sqsdbsiam.database.windows.net",
    options: {
      database: "c1sqddbajobplanningdiary",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };
  await preprocessor.addCucumberPreprocessorPlugin(on, config);  //cucumber plugin
  on("file:preprocessor", browserify.default(config));
  tasks = sqlServer.loadDBPlugin(config.db);           // database plugin
  on("task", tasks);

  return config;
}
module.exports = defineConfig({

  // Project Id link to cypress dashboard
  projectId: "fbc1cu",

  //Define Time out
  defaultCommandTimeout: 6000,

     //When your tests are running, you can use the Cypress.env function to access the values of your environment variables.
  env: {
    url: " https://doctordiary-ci.bma.org.uk/",
  },

  e2e: {
    // Custom folders for screenshots and videos
    screenshotsFolder: "cypress/downloads/Screenshots",
    screenshotOnRunFailure: true,
    videosFolder: "cypress/downloads/Videos",
    video: true,

    //setup for Node Events
    setupNodeEvents,
    

    //spec pattern
    specPattern: "cypress/e2e/TestCase/*.js",
    //specPattern: 'cypress/e2e/BDD/login.feature',

    projectId: "9sdvk5",
    // Reporter configuration
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
      cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/downloads/Reports",
      charts: true,
      reportPageTitle: "My Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: "cypress/reports/junit/results-[hash].xml"
      }
    },
     "video": true
  },
});
