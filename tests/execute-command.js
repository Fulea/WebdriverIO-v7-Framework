describe("Inject js into the target website", () => {
    beforeEach(function () {
      browser.setWindowSize(1400, 1250)
      browser.url("./");
    });
  
    it("Change webdriveruni background color", () => {
        browser.execute(() => {
            return (document.body.style.backgroundColor = "grey");
        });
        browser.pause(2000);
    });
  });