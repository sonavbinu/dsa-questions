function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    //skip non-alphanumeric (left)
    while (left < right && !/[a-z0-9]/i.test(str[left])) {
      left++;
    }
    //skip non-alphanumeric (right)
    while (left < right && !/[a-z0-9]/i.test(str[right])) {
      right--;
    }
    //compare lowercase
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true
