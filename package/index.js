const networkServiceProviders = require("./networkServiceProvidersList");

const removeCountryCode = function (phoneNumber) {
  // convert to string with no spaces or dashes
  phoneNumber = phoneNumber.toString().replace(/[\s-]/g, "");

  if (phoneNumber.startsWith("+234")) {
    phoneNumber = "0" + phoneNumber.slice(4);
  } else if (phoneNumber.startsWith("234")) {
    phoneNumber = "0" + phoneNumber.slice(3);
  }
  return phoneNumber;
};

function getServiceProvider(phoneNumber) {
  let error = "";

  phoneNumber = removeCountryCode(phoneNumber);
  const isNumber = !isNaN(phoneNumber);

  if (!isNumber) {
    error = "Please enter a valid phone number";
    return {
      error,
      isValid: false,
    };
  }

  const selectedServiceProvider = networkServiceProviders.find(({ prefix }) => {
    return phoneNumber.startsWith(prefix);
  });

  if (!selectedServiceProvider) {
    error = "network service provider not found";
    return {
      error,
      isValid: false,
    };
  }

  return {
    serviceProvider: selectedServiceProvider.name,
    isValid: true,
  };
}

module.exports = getServiceProvider;
