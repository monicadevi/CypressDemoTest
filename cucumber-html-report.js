const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumberReports',
	reportPath: 'cypress/CucumberReports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress_BMA Demo'},
            {label: 'Release', value: '1.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Jan 1st 2024, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Jan 5th 2024, 02:56 PM EST'}
        ]
    }
});