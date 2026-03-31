//return the count of unique elements
function removeDuplicates(arr) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      count = count + 1;
    } else {
      return count;
    }
  }
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // 4 (unique: 1,2,3,4)
console.log(removeDuplicates([1, 1, 1, 1])); // 1 (unique: 1)
console.log(removeDuplicates([1, 2, 3, 4])); // 4 (already unique)
