const getServiceProvider = require("../package/index");

describe("getServiceProvider", () => {
  it("should return the correct service provider for a valid number", () => {
    const testCases = [
      { phoneNumber: "07066079012", expectedProvider: "MTN" },
      { phoneNumber: "08021234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09081234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08171234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08161234567", expectedProvider: "MTN" },
      { phoneNumber: "09021234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "07091234567", expectedProvider: "MULTI-LINKS" },
      { phoneNumber: "08101234567", expectedProvider: "MTN" },
      { phoneNumber: "07071234567", expectedProvider: "ZOOMMOBILE" },
      { phoneNumber: "07081234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "08031234567", expectedProvider: "MTN" },
      { phoneNumber: "08051234567", expectedProvider: "GLO" },
      { phoneNumber: "08141234567", expectedProvider: "MTN" },
      { phoneNumber: "09031234567", expectedProvider: "MTN" },
      { phoneNumber: "08071234567", expectedProvider: "GLO" },
      { phoneNumber: "09061234567", expectedProvider: "MTN" },
      { phoneNumber: "08151234567", expectedProvider: "GLO" },
      { phoneNumber: "08181234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08091234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08131234567", expectedProvider: "MTN" },
      { phoneNumber: "07051234567", expectedProvider: "GLO" },
      { phoneNumber: "08021234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09051234567", expectedProvider: "GLO" },
      { phoneNumber: "08101234567", expectedProvider: "MTN" },
      { phoneNumber: "09021234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "08171234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "07091234567", expectedProvider: "MULTI-LINKS" },
      { phoneNumber: "08111234567", expectedProvider: "GLO" },
      { phoneNumber: "08061234567", expectedProvider: "MTN" },
      { phoneNumber: "07061234567", expectedProvider: "MTN" },
      { phoneNumber: "07041234567", expectedProvider: "MTN" },
      { phoneNumber: "08121234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09081234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08161234567", expectedProvider: "MTN" },
      { phoneNumber: "08081234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "08071234567", expectedProvider: "GLO" },
      { phoneNumber: "08141234567", expectedProvider: "MTN" },
      { phoneNumber: "08171234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08061234567", expectedProvider: "MTN" },
      { phoneNumber: "07041234567", expectedProvider: "MTN" },
      { phoneNumber: "08121234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09081234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08161234567", expectedProvider: "MTN" },
      { phoneNumber: "08081234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "08071234567", expectedProvider: "GLO" },
      { phoneNumber: "08141234567", expectedProvider: "MTN" },
      { phoneNumber: "08171234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08061234567", expectedProvider: "MTN" },
      { phoneNumber: "07041234567", expectedProvider: "MTN" },
      { phoneNumber: "08121234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09081234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08161234567", expectedProvider: "MTN" },
      { phoneNumber: "08081234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "08071234567", expectedProvider: "GLO" },
      { phoneNumber: "08141234567", expectedProvider: "MTN" },
      { phoneNumber: "08171234567", expectedProvider: "9MOBILE" },
      { phoneNumber: "08061234567", expectedProvider: "MTN" },
      { phoneNumber: "07041234567", expectedProvider: "MTN" },
      { phoneNumber: "08121234567", expectedProvider: "AIRTEL" },
      { phoneNumber: "09081234567", expectedProvider: "9MOBILE" },
    ];

    testCases.forEach(({ phoneNumber, expectedProvider }) => {
      const result = getServiceProvider(phoneNumber);

      expect(result.isValid).toBe(true);
      expect(result.serviceProvider).toBe(expectedProvider);
    });
  });

  it("should return an error for an invalid number", () => {
    const phoneNumber = "invalidNumber";
    const result = getServiceProvider(phoneNumber);

    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Please enter a valid phone number");
  });

  it("should return an error if network service provider not found", () => {
    const result = getServiceProvider(phoneNumber);

    expect(result.isValid).toBe(false);
    expect(result.error).toBe("network service provider not found");
  });
});
