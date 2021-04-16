describe("IFrame Test", () => {
    beforeEach(function () {
      browser.setWindowSize(1400, 1250)
      browser.url("./IFrame/index.html");
      browser.pause(5000);
    });
  
    it("Click on a given button housed within an IFrame", () => {
        const iframe = $("#frame");
        browser.switchToFrame(iframe);

        const findOutMore_Button = $("//*[text()='Our Products']");
        findOutMore_Button.waitForDisplayed();
        findOutMore_Button.click();
        browser.pause(5000);
    });
  });