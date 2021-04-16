import $ from "webdriverio/build/commands/browser/$";
import Base_PO from './Base_PO';
const dataGenerators = require("../utils/dataGenerators");
const config = require("../config/main-config");

class ContactUs_PO extends Base_PO {
  open() {
    super.open("http://webdriveruniversity.com/Contact-Us/contactus.html");
  }

  get firstName() {
    return $("[name='first_name']");
  }

  get lastName() {
    return $("[name='last_name']");
  }

  get emailAddress() {
    return $("[name='email']");
  }

  get message() {
    return $("[name='message']");
  }

  get submitButton() {
    return $("div#form_buttons > input:nth-of-type(2)");
  }

  submit() {
    this.submitButton.click();
  }

  get successfulContactHeader() {
    return $("//div[@id='contact_reply']/h1");
  }

  successfulContactUsSubmission() {
    this.waitForDisplayed(5000);
    this.firstName.setValue(config.firstName);
    this.lastName.setValue(config.lastName);
    this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
    this.message.setValue(dataGenerators.generateRandomMessage());
    this.submit();
    browser.pause(2000);
    expect(this.successfulContactHeader.getText()).to.contain("Thank You for your Message!");
  }
}
export default new ContactUs_PO();
