var path = require("path");

exports.config = {

    // Use selenium standalone server so we don't have spawn a separate server
    services: ["selenium-standalone"],
    seleniumLogs: "./logs",

    specs: [
        "./features/**/*.feature"
    ],
    exclude: [],

    // Assume user has Chrome and Firefox installed.
    capabilities: [
        {
            browserName: "chrome"
        }
    ],

    logLevel: "verbose",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://www.nice.org.uk/",
    reporters: ["spec"],

    // Use BDD with Cucumber
    framework: "cucumber",
    cucumberOpts: {
        compiler: ["js:babel-register"], // Babel so we can use ES6 in tests
        require: [
            "./steps/given.js",
            "./steps/when.js",
            "./steps/then.js"
        ],
        tagExpression: "not @pending" // See https://docs.cucumber.io/tag-expressions/
    },

    // Set up global asssertion libraries
    before: function before() {
        const chai = require("chai");
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
}