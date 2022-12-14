import { elves } from "./day1_input.js";

// organise the data into an array of elves with sub arrays of food being carried by each elf
function findMostCals() {
  const elvesArr = elves.split(/\n{2}/).map((string) => string.split("\n"));
  const mostCals = elvesArr.reduce((maxCals, current) => {
    const totalCals = current.reduce(
      (acc, current) => acc + Number(current),
      0
    );
    if (totalCals > maxCals) {
      return totalCals;
    } else {
      return maxCals;
    }
  }, 0);
  console.log(mostCals);
  return mostCals;
}

findMostCals();
