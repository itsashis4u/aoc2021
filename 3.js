const util = require("./util");

const input = util.getFileContentFormatted("3.txt");

function part1(arr) {
  let zeroBits = Array.from({ length: arr[0].length }, () => 0);
  let oneBits = Array.from({ length: arr[0].length }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    for (let j = 0; j < element.length; j++) {
      if (element[j] === "0") {
        zeroBits[j] += 1;
      } else {
        oneBits[j] += 1;
      }
    }
  }

  let msb = ""; // Gamma rate
  let lsb = ""; // Epsilon rate

  for (let i = 0; i < zeroBits.length; i++) {
    if (zeroBits[i] > oneBits[i]) {
      msb += "0";
      lsb += "1";
    } else {
      msb += "1";
      lsb += "0";
    }
  }

  console.log("Part 1:", parseInt(msb, 2) * parseInt(lsb, 2));
}

part1(input);

function part2(arr) {
  let zeroBits = Array.from({ length: arr[0].length }, () => 0);
  let oneBits = Array.from({ length: arr[0].length }, () => 0);

  let oxygenRating = [...arr];

  for (let j = 0; j < oxygenRating[0].length; j++) {
    for (let i = 0; i < oxygenRating.length; i++) {
      const element = oxygenRating[i];

      if (element[j] === "0") {
        zeroBits[j] += 1;
      } else {
        oneBits[j] += 1;
      }
    }

    console.log(oxygenRating.length);
    console.log(j, zeroBits[j], oneBits[j]);
    if (oneBits[j] >= zeroBits[j]) {
      console.log("filter 1");
      oxygenRating = oxygenRating.filter((element) => element[j] === "1");
    } else {
      console.log("filter 0");
      oxygenRating = oxygenRating.filter((element) => element[j] === "0");
    }

    // console.log({ oxygenRating })

    if (oxygenRating.length === 1) {
      break;
    }
  }

  console.log("------------------------------------");
  zeroBits = Array.from({ length: arr[0].length }, () => 0);
  oneBits = Array.from({ length: arr[0].length }, () => 0);
  let co2Rating = [...arr];
  for (let j = 0; j < co2Rating[0].length; j++) {
    for (let i = 0; i < co2Rating.length; i++) {
      const element = co2Rating[i];

      if (element[j] === "0") {
        zeroBits[j] += 1;
      } else {
        oneBits[j] += 1;
      }
    }

    console.log(co2Rating.length);
    console.log(j, zeroBits[j], oneBits[j]);
    if (oneBits[j] >= zeroBits[j]) {
      console.log("filter 0");
      co2Rating = co2Rating.filter((element) => element[j] === "0");
    } else {
      console.log("filter 1");
      co2Rating = co2Rating.filter((element) => element[j] === "1");
    }

    if (co2Rating.length === 1) {
      break;
    }
  }

  console.log({ oxygenRating: parseInt(oxygenRating, 2), co2Rating: parseInt(co2Rating, 2) });

  console.log("Part 2:", parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));

  // console.log({ zeroBits, oneBits });
}

part2(input);
