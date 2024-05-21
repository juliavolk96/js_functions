function isPalindrome(str) {

  if (str == null) {
    throw new Error('Аргумент не может быть null или undefined')
  }

  str = str.toString().toLowerCase().replace(/[^a-zа-я0-9]/gi,'');

  if (str.length < 1) {
    return true;
  }

  if (str[0] !== str[str.length -1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

module.exports = isPalindrome;