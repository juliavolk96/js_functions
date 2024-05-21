const assert = require('assert');
const apply = require('./apply');

// Positive times value tests
assert.strictEqual(apply(1, Math.sqrt, 4), 2);
assert.strictEqual(apply(2, Math.sqrt, 16), 2);
assert.strictEqual(apply(1, v => v ** 2, 3), 9);
assert.strictEqual(apply(5, v => v + 10, 3), 53);
assert.strictEqual(apply(3, Math.sqrt, 256), 2);

// Zero times value test
assert.strictEqual(apply(0, Math.sqrt, 4), 4);

// Negative times value test
assert.throws(() => apply(-1, Math.sqrt, 4), /Параметр "times" должен быть неотрицательным числом/);

// Non-integer times value test 
assert.throws(() => apply(1.5, Math.sqrt, 4), /Параметр "times" должен быть неотрицательным числом/);

// Non-function func test
assert.throws(() => apply(1, 'not a function', 4), /Параметр "func" должен быть функцией/);

// Non-number arg test
assert.throws(() => apply(1, Math.sqrt, 'not a number'), /Параметр "arg" должен быть числом/);

console.log('Все тесты пройдены');