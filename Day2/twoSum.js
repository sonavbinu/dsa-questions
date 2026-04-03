// function twoSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }
// console.log(twoSum([1, 3, 4, 5, 6, 7, 8], 10)); // [0, 6]
// console.log(twoSum([1, 3, 4, 5, 6, 7, 8], 11)); // [1, 6]

function twoSum(arr, target) {
  const map = new Map();

  for (i = 0; i < arr.lengh; i++) {
    const x = target - arr[i];

    if (map.has(x)) {
      return [map.get(x), i];
    }

    map.set(arr[i], i);
  }
}
