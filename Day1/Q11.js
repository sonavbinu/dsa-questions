function doubleAll(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(doubleAll([1, 2, 3])); // [2, 4, 6]
console.log(doubleAll([-3, 0, 4])); // [-6, 0, 8]
