describe("Close tab", () => {
    beforeEach(function () {
      browser.setWindowSize(1400, 1250)
      browser.url("./");
    });
  
    it("Get homepage and contact us page titles, then close the focused tab", () => {
      const clickById = $("#contact-us");
      clickById.click();

      console.log('HOMEPAGE HEADER: ' + browser.getTitle());
      browser.pause(2000);

      browser.switchWindow('WebDriver | Contact Us');
      console.log('CONTACT US HEADER: ' + browser.getTitle());
      browser.closeWindow();
      browser.pause(2000);
    });
  });