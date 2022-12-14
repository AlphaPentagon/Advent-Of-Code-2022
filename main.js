import { elves } from "./day1_input.js";

// organise the data into an array of elves with sub arrays of food being carried by each elf

const elvesArr = elves.split(/\n{2}/).map((string) => string.split("\n"));

function sumArr(arr) {
  return arr.reduce((acc, current) => acc + Number(current), 0);
}

function findMostCals() {
  const mostCals = elvesArr.reduce((maxCals, current) => {
    const totalCals = sumArr(current);
    if (totalCals > maxCals) {
      return totalCals;
    } else {
      return maxCals;
    }
  }, 0);
  console.log(mostCals);
  return mostCals;
}

// if the maxCalsArr alread has 3 elements
// sort the array into numerical order
// compare the first element with the new total
// if new total is more than remove that entry and replace it with the new one

function findTopThreeCals() {
  const topThreeCalsArr = elvesArr.reduce((maxCalsArr, current) => {
    console.log(maxCalsArr);
    const totalCals = sumArr(current);
    if (maxCalsArr.length < 3) {
      return [...maxCalsArr, totalCals];
    } else {
      maxCalsArr.sort();
      if (totalCals > maxCalsArr[0]) {
        console.log("NewTopCals ", totalCals);
        return [...maxCalsArr.splice(1, 2), totalCals];
      } else {
        console.log("IgnoredCals ", totalCals);
        return maxCalsArr;
      }
    }
  }, []);
  const totalCals = sumArr(topThreeCalsArr);
  console.log(totalCals);
  return totalCals;
}

findMostCals();
findTopThreeCals();
