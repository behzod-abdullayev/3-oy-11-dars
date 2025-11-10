// 1-masala

// function num (arr) {
// let maxCount = 0
// let maxElement = 0
// for (let i = 0; i < arr.length; i++) {
// let count = 0
// for (let m = 0; m < arr.length; m++) {
// if (arr[i] === arr[m]) {
//     count++
// }
// }
// if (count > maxCount) {
//     maxCount = count
//     maxElement = arr[i]
// }
// }
// return {element : maxElement , count : maxCount}
// }
// console.log(num ([18, 3, 24, 23, 18, 4, 18, 18, 3, 18, 8 ]));

// 2-masala

// function countEvens (arr) {
//     let count = 0
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 2 === 0) {
//     count++
// }
// }
// return count
// }
// console.log(countEvens ([18, 3, 24, 23, 18, 4, 18, 18, 3, 18, 8 ]));

// 3-masala

// function num (arr) {
// let result = []
// for (let i = 0; i < arr.length; i++) {
// let count = 0
// for (let m = 0; m < arr.length; m++) {
// if (arr[i] === arr[m]) {
//     count++
// }
// }
// if (count === 1) {
//     result.push(arr[i])
// }
// }
// return result
// }
// console.log(num ([1, 2, 4, 4, 3, 3, 1, 7, 3 ]));

// 4-masala

// function reversing (str) {
// return str.split(" ").reverse().join(" ")
// }
// console.log(reversing ("i am learning high level programming language"));

// 5-masala

// function num (str) {
// for (let i = 0; i < str.length; i++) {
// if ( str[i] < "0" || str[i] > "9" ) {
//     return false
// }
// }
// return true
// }
// console.log(num ("13128"));

// 6-masala

// function finding (arr) {
// let result = []
// for (let i = 0; i < arr.length; i++) {
// let count = 0
// for (let m = 0; m < arr.length; m++) {
// if (arr[i][m] === "e" || arr[i][m] === "E") {
//     count++
// }
// }
// if (count >= 2 ) {
//     result.push(arr[i])
// }
// }
// return result
// }
// console.log(finding(["elephant", "apple", "cheese", "banana", "tree"]));

// 7-masala

// function word(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let increasing = true;
//     for (let m = 0; m < arr[i].length - 1; m++) {
//       if (arr[i][m] >= arr[i][m + 1]) {
//         increasing = false;
//         break;
//       }
//     }
//     if (increasing) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(word(["abs", "dog", "xyz", "apple"]));

// 8-masala

// function func(num) {
//   if (Array.isArray(num)) {
//     let result = "";
//     for (let i = 0; i < num.length; i++) {
//       result += num[i];
//     }
//     return Number(result);
//   } else if (typeof num === "number") {
//     let arr = [];
//     let str = num.toString();
//     for (let i = 0; i < str.length; i++) {
//       arr.push(Number(str[i]));
//     }
//     return arr;
//   }
// }
// console.log(func([2, 3, 5]));

// 9-masala

// function measuredepth (arr) {
// if (Array.isArray(arr)) {
//     return 1 + measuredepth(arr[0])
// } else {
//     return 0
// }
// }
// console.log(measuredepth([[[[[[[[[[]]]]]]]]]]));

// 10-masala

// function numssum(num) {
//   let sum = 0;
//   num = num.toString();
//   for (let i = 0; i < num.length; i++) {
//     sum += Number(num[i]);
//   }
//   return sum;
// }
// console.log(numssum(4533));

// 1-masala (leetcode)
// https://leetcode.com/problems/counting-bits/

// function countBits(n) {
//   let res = [];
//   for (let i = 0; i <= n; i++) {
//     let res1 = i.toString(2);
//     let count = 0;
//     for (let j = 0; j < res1.length; j++) {
//       if (res1[j] === '1') {
//         count++;
//       }
//     }
//     res.push(count);
//   }
//   return res;
// }
// console.log(countBits(5));

// 2-masala (leetcode)
// https://leetcode.com/problems/to-lower-case/

//  function toLowerCase (s) {
//    return s.toLowerCase()
// }
// console.log(toLowerCase("HeLlo"));

// 3-masala
// https://leetcode.com/problems/self-dividing-numbers/

// function selfDividingNumbers(left, right) {
//   let result = [];
//   let count = left;
//   for (let i = left; i <= right; i++) {
//     let num = count++;
//     let str = num.toString();
//     let togri = true;
//     for (let j = 0; j < str.length; j++) {
//       let digit = +str[j];
//       if (digit === 0 || num % digit !== 0) {
//         togri = false;
//         break;
//       }
//     }
//     if (togri) result.push(num);
//   }
//   return result;
// }
// console.log(selfDividingNumbers(22, 27));

// 4-masala (leetcode)
// https://leetcode.com/problems/height-checker/

// function heightChecker (heights) {
//     let expected = [... heights]
//     let wrong = 0
//     for (let i = 0; i < heights.length && expected.sort((a, b) => a - b) ; i++) {
// if (heights[i] !== expected[i]) {
//     wrong++
// }
//     }
//     return wrong
// };
// console.log(heightChecker([1,1,4,2,1,3]));

// 5-masala (leetcode)
// https://leetcode.com/problems/duplicate-zeros/

// function duplicateZeros(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
//       for (let j = n - 1; j > i; j--) {
//         arr[j] = arr[j - 1];
//       }
//       i++;
//     }
//   }
//   return arr;
// }
// console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
