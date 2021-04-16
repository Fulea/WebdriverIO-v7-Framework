export default class Base_PO {
    open(path) {
        browser.setWindowSize(1400, 1250);
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log("Pausing for: " + time + " seconds");
        browser.pause(time);
    }
}