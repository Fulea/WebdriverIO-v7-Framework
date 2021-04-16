describe("Switch window", () => {
    beforeEach(function () {
      browser.setWindowSize(1400, 1250)
      browser.url("./");
    });
  
    it("Get homepage and contact us page titles", () => {
      const clickById = $("#contact-us");
      clickById.click();

      console.log('HOMEPAGE HEADER: ' + browser.getTitle());
      browser.pause(2000);

      browser.switchWindow('WebDriver | Contact Us')
      console.log('CONTACT US HEADER: ' + browser.getTitle());
    });
  });