function sortedSquares(arr) {
  let n = arr.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    let leftSquare = arr[left] ** 2;
    let rightSquare = arr[right] ** 2;
    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }
  return result;
}
console.log(sortedSquares([-4, -2, 0, 1, 3]));
