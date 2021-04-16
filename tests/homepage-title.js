const assert = require("assert");

describe("Test webdriveruni homepage", () => {
  it("Validate if the webdriveruni homepage title is correct", () => {
    browser.setWindowSize(1400, 1250)
    browser.url("./");
    const title = browser.getTitle();
    assert.strictEqual(title, 'WebDriverUniversity.com')
  });
});
