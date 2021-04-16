describe("Test contact us logic from webdriveruni", () => {
    beforeEach(function () {
      browser.setWindowSize(1400, 1250)
      browser.url("./");
    });
  
    it("Test the contact us page", () => {
        const contactUsButton = $("//h1[text()='CONTACT US']");
        contactUsButton.click();

        browser.switchWindow('WebDriver | Contact Us');

        const firstNameTextField = $("[name='first_name']");
        firstNameTextField.waitForDisplayed(1000);
        firstNameTextField.addValue('Add your text here');
        browser.pause(3000);

        firstNameTextField.clearValue();
        browser.pause(3000);
        firstNameTextField.setValue("Hello, how are you?");
        browser.pause(3000);
    });
  });