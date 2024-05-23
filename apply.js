function apply(times, func, arg) {

  if (typeof times !== 'number' || !Number.isInteger(times) || times < 0) {
    throw new Error('The "times" parameter must be a non-negative integer');
  }

  if (typeof func !== 'function') {
    throw new Error('The "func" parameter must be a function');
  }

  if (typeof arg !== 'number') {
    throw new Error('The "arg" parameter must be a number');
  }

  if (times === 0) {
    return arg;
  }

  return apply(times - 1, func, func(arg));
}

module.exports = apply;