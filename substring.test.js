const assert = require('assert');
const substr = require('./substring');

// Positive start index tests
assert.strictEqual(substr('hello', 1, 3), 'ell');
assert.strictEqual(substr('abba', 0, 1), 'a');
assert.strictEqual(substr('abba', 1, 2), 'bb');
assert.strictEqual(substr('abba', 1, 10), 'bba');
assert.strictEqual(substr('abba', 1, 0), '');

// Negative start index tests
assert.strictEqual(substr('hello', -1), 'o');
assert.strictEqual(substr('abba', -10, 2), 'ab');
assert.strictEqual(substr('abba', -1, 100), 'a');

// Large start index tests
assert.strictEqual(substr('abba', 100, 3), '');

// Negative length tests
assert.strictEqual(substr('hello', 0, -1), 'h');
assert.strictEqual(substr('abba', -1, -1), 'a');
assert.strictEqual(substr('abba', 1, -10), 'b');

// Null and undefined tests
assert.throws(() => substr(null, 0, 1), /Argument cannot be null or undefined/);
assert.throws(() => substr(undefined, 0, 1), /Argument cannot be null or undefined/);

console.log('All tests passed');