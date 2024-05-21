# JavaScript Functions

This project includes three JavaScript functions: `isPalindrome`, `substr`, and `apply`.

## isPalindrome

The `isPalindrome` function checks whether a string is a palindrome.

Usage example:

```javascript
const isPalindrome = require('./palindrome');
console.log(isPalindrome('Радар')); // true
```

## substr

The substr function returns a substring from the given string.

Usage example:

```javascript
const substr = require('./substring');
console.log(substr('hello', 1, 3)); // 'ell'
```

## apply

The apply function applies a function to an argument a specified number of times.

Usage example:

```javascript
const apply = require('./apply');
console.log(apply(1, Math.sqrt, 4)); // 2
```

## Tests

Tests for each function are written using the assert module from Node.js. You can run the tests by executing the following command:

```bash
node <test file name>.test.js
```