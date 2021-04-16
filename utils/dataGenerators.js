module.exports = {
    // Example: AutoFramework_363468325923@webdriveruni.com
    generateRandomEmailAddress: function () {
        let emailAddress = "AutoFramework_" + Math.random().toString().replace('0.', '') + "@webdriveruni.com";
        return emailAddress;
    },

    // Example: tjg3h8g39e4b38gj3g
    generateRandomMessage: function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}