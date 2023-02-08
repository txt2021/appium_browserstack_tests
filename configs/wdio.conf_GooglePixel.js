exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || process.env.MY_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY || process.env.MY_KEY,
  
    updateJob: false,
    specs: [
      '../test/specs/**.spec.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://f3b027f027716ed1579dcf83262bdbb8a10d07d6',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    reporters: [['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };