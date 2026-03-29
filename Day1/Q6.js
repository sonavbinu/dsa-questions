//second largest

function secondLargest(arr) {
  let result = "";

  arr.sort((a, b) => a - b);
  result = arr.length - 2;
  return result;
}
console.log(secondLargest([3, 1, 4, 1, 5, 9, 2]));
