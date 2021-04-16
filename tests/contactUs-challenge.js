describe("Test the functionality of the contact us page", () => {
  beforeEach(function () {
    browser.setWindowSize(1400, 1250);
    browser.url("./");
  });

  it("Check title, url, complete form, validate successfull submission", () => {
    const pageDetails = browser.getUrlAndTitle();
    const contactUsButton = $("//h1[text()='CONTACT US']");
    const firstNameTextField = $("[name='first_name']");
    const lastNameTextField = $("[name='last_name']");
    const emailTextField = $("[name='email']");
    const messageTextField = $("[name='message']");
    const submitButton = $("div#form_buttons > input:nth-of-type(2)");
    

    expect(pageDetails.title).to.contains("WebDriverUniversity");
    expect(pageDetails.url).to.contains("webdriveruniversity");
    browser.pause(2000);

    contactUsButton.click();
    browser.switchWindow("WebDriver | Contact Us");
    browser.pause(2000);

    firstNameTextField.waitForDisplayed(1000);
    firstNameTextField.setValue("John");

    lastNameTextField.waitForDisplayed(1000);
    lastNameTextField.setValue("Smith");

    emailTextField.waitForDisplayed(1000);
    emailTextField.setValue("johnsmith@mail.com");

    messageTextField.waitForDisplayed(1000);
    messageTextField.setValue("Wazzzzuuuup!");
    browser.pause(2000);

    submitButton.click();
    browser.pause(2000);

    const contactUsUrl = browser.getUrlAndTitle();
    expect(contactUsUrl.url).to.contains("contact-form-thank-you");
  });
});
