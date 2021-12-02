const util = require("./util");

let arr = util.getFileContentFormatted("./1.txt");
arr = arr.map(Number);

/** Part 1 */
function part1() {
  let counter = 0;
  let initial = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > initial) {
      counter++;
    }
    initial = arr[i];
  }
  console.log("Part 1:", counter);
}

part1();

/** Part 2 */
function part2() {
  let counter = 0;
  let initial = arr[0] + arr[1] + arr[2];
  for (let i = 1; i < arr.length; i++) {
    const sum = arr[i] + arr[i + 1] + arr[i + 2];
    if (sum > initial) {
      counter++;
    }
    initial = sum;
  }
  console.log("Part 2:", counter);
}

part2();
