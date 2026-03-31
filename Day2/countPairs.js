// function countPairs(arr, target) {
//   let count = 0;
//   let left = 0;
//   let right = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[left] + arr[right] === target) {
//         count = count + 0.5;
//       }
//     }
//     return count;
//   }
// }
// console.log(countPairs([1, 2, 3, 4, 5, 6], 7));

function countPairs(arr, target) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      count++;
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}
console.log(countPairs([1, 2, 3, 4, 5, 6], 7));
