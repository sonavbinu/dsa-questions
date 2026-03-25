function countOf(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countOf([1, 2, 2, 3, 4, 2, 2], 2));
console.log(countOf([1, 1, 1, 1], 9));
