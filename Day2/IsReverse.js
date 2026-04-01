function isReverse(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let left = 0;
  let right = str2.length - 1;

  while (left <= right) {
    if (str1[left] !== str2[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isReverse("hello", "olleh")); // true
console.log(isReverse("hello", "world")); // false
console.log(isReverse("abc", "cba")); // true
