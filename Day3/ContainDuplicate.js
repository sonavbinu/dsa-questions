function containDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4]));
console.log(containDuplicate([1, 2, 3, 1, 3, 4, 5, 6]));
