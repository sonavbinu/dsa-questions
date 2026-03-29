// count evens in a given array

function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countEvens([1, 2, 3, 4, 5, 6]));
