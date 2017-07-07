var assert = require('assert');
var chai = require("chai");
chai.should();

module.exports = function() {
  this.Given(/^I am on the NICE homepage$/, function() {
    browser.url('http://test.nice.org.uk/');
  });

  this.When(/^I click on the find guidance button$/, function() {
    browser.element("a[href='/guidance']").click();
  });

  this.Then(/^I should see the guidance page$/, function() {
    //browser.debug();
    $("h1='Find Guidance'").should.not.be.undefined;
  });
};

