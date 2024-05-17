# is-iterable-empty

[![npm version](https://badge.fury.io/js/is-iterable-empty.svg)](https://badge.fury.io/js/is-iterable-empty) [![License: MIT](https://img.shields.io/github/license/openmooncommunity/is-iterable-empty)](https://opensource.org/licenses/MIT)

A simple utility to check if an Iterable (such as arrays, strings, sets, etc.) is empty. Supports all JavaScript iterable data structures.

## Installation

You can install the package using npm:

```bash
npm install is-iterable-empty
```

## Usage

Import the function into your project and use it to check if an Iterable is empty:

```js
const isIterableEmpty = require('is-iterable-empty');

console.log(isIterableEmpty([])); // true
console.log(isIterableEmpty([1, 2, 3])); // false
console.log(isIterableEmpty('')); // true
console.log(isIterableEmpty('hello')); // false
console.log(isIterableEmpty(new Set())); // true
console.log(isIterableEmpty(new Set([1, 2, 3]))); // false
```

## API

### `isIterableEmpty(iterable)`

- `iterable` (Iterable): The Iterable object to test.
- Return: `boolean` - `true` if the Iterable is empty, otherwise `false`.

## Examples

### Check Array

```js
const isIterableEmpty = require('is-iterable-empty');

console.log(isIterableEmpty([])); // true
console.log(isIterableEmpty([1, 2, 3])); // false
```

### Check Strings

```js
const isIterableEmpty = require('is-iterable-empty');

console.log(isIterableEmpty('')); // true
console.log(isIterableEmpty('hello')); // false
```

### Check Set

```js
const isIterableEmpty = require('is-iterable-empty');

console.log(isIterableEmpty(new Set())); // true
console.log(isIterableEmpty(new Set([1, 2, 3]))); // false
```

## Contributions

Contributions, bug reports and feature requests are welcome! Feel free to open an issue or pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.