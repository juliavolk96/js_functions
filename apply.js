function apply(times, func, arg) {

  if (typeof times !== 'number' || !Number.isInteger(times) || times < 0) {
    throw new Error('Параметр "times" должен быть неотрицательным числом');
  }

  if (typeof func !== 'function') {
    throw new Error('Параметр "func" должен быть функцией');
  }

  if (typeof arg !== 'number') {
    throw new Error('Параметр "arg" должен быть числом');
  }

  if (times === 0) {
    return arg;
  }

  return apply(times - 1, func, func(arg));
}

module.exports = apply;