# get-nigerian-network-provider

A simple utility package to determine the network service provider based on Nigerian phone number

Get the network service provider's name of a Nigerian phone number through its number prefix

_example:_

| Phone Number | Network Service Provider |
| ------------ | ------------------------ |
| 0803         | MTN                      |
| 0911         | AIRTEL                   |
| 0708         | GLO                      |
| 0905         | 9MOBILE                  |

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [Show your support](#show-your-support)
- [License](#license)

<!-- [![Build Status](https://travis-ci.com/Emmanuel-Xs/nigerian-network-provider.svg?branch=main)](https://travis-ci.com/Emmanuel-Xs/nigerian-network-provider)
[![Coverage Status](https://coveralls.io/repos/github/Emmanuel-Xs/nigerian-network-provider/badge.svg?branch=main)](https://coveralls.io/github/Emmanuel-Xs/nigerian-network-provider?branch=main)

[![npm version](https://img.shields.io/npm/v/nigerian-network-provider.svg)](https://www.npmjs.com/package/nigerian-network-provider)
[![License](https://img.shields.io/npm/l/nigerian-network-provider.svg)](https://github.com/Emmanuel-Xs/nigerian-network-provider/blob/main/LICENSE)  -->

## Installation

You can install the package using npm:

```bash
npm install nigerian-network-provider
```

## Usage

Import the package in your code using ES6 import syntax:

```javascript
import getServiceProvider from "nigerian-network-provider";
```

or using CommonJS require syntax:

```javascript
const getServiceProvider = require("nigerian-network-provider");
```

To get the service provider name of a phone number, simply call the `getServiceProvider function` and pass the phone number as an argument.

```javascript
const phoneNumber = "07066079012";
const result = getServiceProvider(phoneNumber);
console.log(result);
```

The result will be an object with the serviceProvider property indicating the detected service provider and the isValid property indicating that the phone number is valid.

```javascript
{
  isValid: true,
  serviceProvider: "MTN"
}
```

If the phone number is invalid, the result will be an object with the isValid property set to false and the error property set to a string indicating the error.

```javascript
// invalid number

const result = getServiceProvider("invalidNumber");
console.log(result);

{
  isValid: false,
  error: "Please enter a valid phone number"
}
```

If the phone number is valid but the service provider is not found, the result will be an object with the isValid property set to false and the error property set to a string indicating the error.

```javascript
// network service provider not found

const result = getServiceProvider("+e2349011234545");

{
  isValid: false,
  error: "network service provider not found"
}
```

### Example

Here's an example of using the package to determine the service provider of a Nigerian phone number:

```javascript
import getServiceProvider from "nigerian-network-provider";

const result = getServiceProvider("07061260712");
//or
const result = getServiceProvider("+2347061260712");
//or
const result = getServiceProvider("2347061260712");
// it also accepts numbers with minimum of 4 digits Prefix
const result = getServiceProvider("0912");
console.log(result);

// Output:

 {
   isValid: true,
   serviceProvider: "MTN"
 }
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Create a pull request.

## Author

[Nwaohiri Emmanuel](https://github.com/Emmanuel-Xs)

## Acknowledgements

- [NCC National numbering plan mobile number allocation october 2022](https://www.ncc.gov.ng/accessible/documents/1063-national-numbering-plan-mobile-number-allocation-october-2022/file)

- [Prefix for All Nigerian Phone Numbers (2023 Update) from Awajis.com](https://awajis.com/all-nigerian-gsm-numbers-and-networks/)
- [Nigerian Phone Number Validator npm package](https://www.npmjs.com/package/nigeria-phone-number-validator)

## Show your support

Give a ⭐️ if you like this project!

## License

This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/license/isc-license-txt/) file for details.

Feel free to customize the content further to match your project's specifics and preferences.
