const fs = require("fs");

const data = fs.readFileSync("1.txt", "utf8");
const arr = data
    .toString()
    .split("\n")
    .filter((x) => x !== "")
    .map(Number);

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
