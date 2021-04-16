import ContactUs_PO from "../page-objects/ContactUs_PO";

describe("Test the functionality of the contact us page", () => {
  beforeEach(function () {
    ContactUs_PO.open();
  });

  it("Submit all information in the Contact us page", () => {
    ContactUs_PO.successfulContactUsSubmission();
  });
});
