var chai = require("chai");
chai.should();

module.exports = function() {
  this.Given(/^I am on the homepage$/, function() {
      browser.url('http://test.nice.org.uk/');
  });

  this.When(/^I click on the find guidance button$/, function() {
    $("a[href='/guidance']").click();
  });

  this.Then(/^I should see the guidance page$/, function() {
  });
};

