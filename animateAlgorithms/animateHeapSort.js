import { finalAnimation } from "./finalAnimation";

const colors = [
  "yellow",
  "violet",
  "lightsalmon",
  "pink",
  "lightblue",
  "lightgreen",
  "plum",
  "tomato",
];

function animateShifts(
  x,
  shifts,
  array,
  setArray,
  z,
  swaps,
  delay,
  to,
  setDisable
) {
  setTimeout(() => {
    let newArray = array.slice();
    newArray[shifts[x]].backgroundColor = colors[newArray[shifts[x]].level];
    setArray(newArray);

    if (x === shifts.length - 1) {
      newArray[to].backgroundColor = "white";
      setArray(newArray);
      animateSwaps(z + 1, swaps, array, setArray, setDisable);
      return;
    }

    newArray[shifts[x + 1]].backgroundColor = "red";
    newArray[shifts[x + 1]].playNote();

    let val = newArray[shifts[x]].value;

    newArray[shifts[x]] = {
      ...newArray[shifts[x]],
      value: newArray[shifts[x + 1]].value,
    };

    newArray[shifts[x + 1]] = {
      ...newArray[shifts[x + 1]],
      value: val,
    };

    setArray(newArray);
    animateShifts(
      x + 1,
      shifts,
      newArray,
      setArray,
      z,
      swaps,
      (x + 6) * 5,
      to,
      setDisable
    );
  }, delay);
}

function animateSwaps(z, swaps, array, setArray, setDisable) {
  if (z === swaps.length) {
    finalAnimation(0, 0, array, setArray, setDisable);
    return;
  }
  let { from, to, shifts } = swaps[z];
  let newArray = array.slice();

  let val = newArray[to].value;

  newArray[to] = {
    ...newArray[from],
    backgroundColor: "green",
  };

  newArray[from] = {
    ...newArray[from],
    value: val,
  };

  newArray[shifts[0]].backgroundColor = "red";
  newArray[shifts[0]].playNote();

  setArray(newArray);

  animateShifts(0, shifts, newArray, setArray, z, swaps, 5 * 5, to, setDisable);
}

function animateShiftdowns(i, shiftdowns, array, setArray, swaps, setDisable) {
  if (i === shiftdowns.length) {
    animateSwaps(0, swaps, array, setArray, setDisable);
    return;
  }
  let newArray = array.slice();
  let shiftdown = shiftdowns[i];
  newArray[shiftdown[0]].backgroundColor = "red";
  newArray[shiftdown[0]].playNote();
  setArray(newArray);
  animateShiftdown(
    0,
    shiftdown,
    newArray,
    setArray,
    i,
    shiftdowns,
    5 * 10,
    swaps,
    setDisable
  );
}

function animateShiftdown(
  j,
  shiftdown,
  array,
  setArray,
  i,
  shiftdowns,
  delay,
  swaps,
  setDisable
) {
  setTimeout(() => {
    let newArray = array.slice();
    newArray[shiftdown[j]].backgroundColor =
      colors[newArray[shiftdown[j]].level];
    setArray(newArray);

    if (j == shiftdown.length - 1) {
      animateShiftdowns(i + 1, shiftdowns, array, setArray, swaps, setDisable);
      return;
    }
    newArray[shiftdown[j + 1]].backgroundColor = "red";
    newArray[shiftdown[j + 1]].playNote();

    let val = newArray[shiftdown[j]].value;
    newArray[shiftdown[j]] = {
      ...newArray[shiftdown[j]],
      value: newArray[shiftdown[j + 1]].value,
    };
    newArray[shiftdown[j + 1]] = {
      ...newArray[shiftdown[j + 1]],
      value: val,
    };
    setArray(newArray);
    animateShiftdown(
      j + 1,
      shiftdown,
      newArray,
      setArray,
      i,
      shiftdowns,
      (j + 6) * 10,
      swaps,
      setDisable
    );
  }, delay);
}

export function animateHeapSort(animations, array, setArray, setDisable) {
  let newArray = array.slice();
  let n = newArray.length;

  for (let i = Math.floor(n / 2 + 1); i < newArray.length; i++) {
    newArray[i].backgroundColor = colors[newArray[i].level];
  }

  animateShiftdowns(
    0,
    animations.shiftdowns,
    newArray,
    setArray,
    animations.swaps,
    setDisable
  );

  setArray(newArray);
}
