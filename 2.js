const util = require("./util");

const input = util.getFileContentFormatted("./2.txt");

function part1(arr) {
  let horizontal = 0;
  let depth = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const [command, value] = element.split(" ");

    switch (command) {
      case "forward": {
        horizontal += parseInt(value);
        break;
      }

      case "down": {
        depth += parseInt(value);
        break;
      }

      case "up": {
        depth -= parseInt(value);
        break;
      }

      default: {
        break;
      }
    }
  }

  console.log('Part 1: ', horizontal * depth);
}

part1(input);



function part2(arr) {
  let horizontal = 0;
  let aim = 0;
  let depth = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const [command, value] = element.split(" ");

    switch (command) {
      case "forward": {
        horizontal += parseInt(value);
        depth += aim * parseInt(value);
        break;
      }

      case "down": {
        aim += parseInt(value);
        break;
      }

      case "up": {
        aim -= parseInt(value);
        break;
      }

      default: {
        break;
      }
    }
  }

  console.log('Part 2: ', horizontal * depth);
}

part2(input);
