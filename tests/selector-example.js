describe("Selectors Test", () => {
  beforeEach(function () {
    browser.setWindowSize(1400, 1250)
    browser.url("./");
  });

  it("By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();
    browser.pause(2000);
  });

  it("By Class", () => {
    const clickByClass = $(".section-title");
    clickByClass.click();
    browser.pause(2000);
  });

  it("By Xpath", () => {
    const clickByXpath = $("//h1[text()='CONTACT US']/../..");
    clickByXpath.click();
    browser.pause(2000);
  });

  it("By CSS", () => {
    const clickByCss = $("#contact-us h1");
    clickByCss.click();
    browser.pause(2000);
  });
});
