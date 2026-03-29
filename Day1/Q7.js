//contains target element or not
function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
console.log(contains([1, 2, 3, 4], 3));
console.log(contains([1, 2, 3, 4], 9));
