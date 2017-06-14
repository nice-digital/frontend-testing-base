var assert = require('assert');
var chai = require("chai");
chai.should();

module.exports = function() {
  this.Given(/^I am on the homepage$/, function() {
    browser.url('http://test.nice.org.uk/');
  });

  this.When(/^I click on the find guidance button$/, function() {
    browser.element("a[href='/guidance']").click();
  });

  this.Then(/^I should see the guidance page$/, function() {
    //browser.debug();
    //
    console.log(browser.getUrl());
    // var exp_url = browser.getUrl();
    // console.log(exp_url);
    // assert.equal('https://test.nice.org.uk/guidance', exp_url);
  });
};

