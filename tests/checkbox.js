describe("isExisting, isSelected, and isDisplayed Commands", () => {
  beforeEach(function () {
    browser.setWindowSize(1400, 1250);
    browser.url("./Dropdown-Checkboxes-RadioButtons/index.html");
  });

  it("Validate state of checkbox", () => {
    const checkbox = $("//div[@id='checkboxes']//input[@value='option-1']");
    // browser.pause(1000);
    expect(checkbox.isExisting()).to.be.true;
    expect(checkbox.isSelected()).to.be.false;
    expect(checkbox.isDisplayed()).to.be.true;

    console.log("Is existing: " + checkbox.isExisting());
    console.log("Is selected: " + checkbox.isSelected());
    console.log("Is displayed: " + checkbox.isDisplayed());
  });
});
