const assert = require('assert');
const isPalindrome = require('./palindrome');

// Testing correct identification of palindromes
assert.strictEqual(isPalindrome('Радар'), true);
assert.strictEqual(isPalindrome('топот'), true);
assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
assert.strictEqual(isPalindrome(122221), true);

// Testing correct identification of non-palindromes
assert.strictEqual(isPalindrome('Привет'), false);
assert.strictEqual(isPalindrome(12345), false);

// Testing correct handling of empty string and single-character string
assert.strictEqual(isPalindrome(''), true);
assert.strictEqual(isPalindrome('a'), true);

// Testing error handling for null and undefined arguments
assert.throws(() => isPalindrome(null), /Argument cannot be null or undefined/);
assert.throws(() => isPalindrome(undefined), /Argument cannot be null or undefined/);

console.log('All tests passed');