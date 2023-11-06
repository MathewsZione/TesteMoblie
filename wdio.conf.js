const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    services: ['appium'],

    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "8.1",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',

    }],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
}