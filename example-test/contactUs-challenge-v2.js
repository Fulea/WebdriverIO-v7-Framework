const config = require('../config/main-config');

describe("Test the functionality of the contact us page", () => {
  beforeEach(function () {
    browser.setWindowSize(1400, 1250);
    browser.url("./");

    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.title).to.contains("WebDriverUniversity");
    expect(pageDetails.url).to.contains("webdriveruniversity");
    browser.pause(2000);
  });

  it("Check title, url, complete form, validate successfull submission", () => {
    browser.waitAndClick("//h1[text()='CONTACT US']");

    browser.switchWindow("WebDriver | Contact Us");
    browser.pause(2000);

    browser.waitAndSendKeys("[name='first_name']", config.firstName);
    browser.waitAndSendKeys("[name='last_name']", config.lastName);
    browser.waitAndSendKeys("[name='email']", config.email);
    browser.waitAndSendKeys("[name='message']", config.message);

    browser.waitAndClick("div#form_buttons > input:nth-of-type(2)");
    browser.pause(2000);

    const contactUsUrl = browser.getUrlAndTitle();
    expect(contactUsUrl.url).to.contains("contact-form-thank-you");
  });
});
