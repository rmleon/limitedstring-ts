# limitedstring-ts

[![npm version](https://badge.fury.io/js/limitedstring-ts.svg)](https://badge.fury.io/js/limitedstring-ts)

A TypeScript library to create and manipulate strings with size limitations.

## Installation

You can install `limitedstring-ts` using npm:

```sh
npm install limitedstring-ts
```

Or using yarn:

```sh
yarn add limitedstring-ts
```

## Usage

Import the library and use it in your TypeScript or JavaScript project:

```typescript
import { LimitedString } from "limitedstring-ts";

const myString = new LimitedString("Hello, World!", 10);
console.log(myString.getValue()); // Output: "Hello, Wor"
```

## Features

- Create strings with a specified maximum length.
- Provides utility methods to manipulate and validate the strings.

## Documentation

For detailed documentation, please visit the [GitHub repository](https://github.com/rmleon/limitedstring-ts).

## Development

### Building the Project

To build the project, run:

```sh
npm run build
```

### Running Tests

This project uses Jest for testing. To run tests, use:

```sh
npm test
```

### Linting

Lint your code using ESLint:

```sh
npm run lint
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to help improve this library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


