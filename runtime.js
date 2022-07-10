const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
// insert 80.9 μs | append 238 μs
const smallArray = getSizedArray(100);
// insert: 380.5 μs | append 391.7 μs
const mediumArray = getSizedArray(1000);
// insert: 660.4 μs | 27.7 μs
const largeArray = getSizedArray(10000);
// insert: 17.2535 ms | Append: 1.5357 ms
const extraLargeArray = getSizedArray(100000);
// insert: 1.90303 ms | Append 10.5159 ms

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log("Results for the Array");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
