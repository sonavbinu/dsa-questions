function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
console.log(twoSum([1, 3, 4, 5, 6, 7, 8], 9)); // [0, 6]
console.log(twoSum([1, 3, 4, 5, 6, 7, 8], 11)); // [1, 6]
