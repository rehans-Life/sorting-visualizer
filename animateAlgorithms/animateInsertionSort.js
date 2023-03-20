import { finalAnimation } from "./finalAnimation";

function animateSwaps(
  j,
  swaps,
  element,
  array,
  setArray,
  i,
  animations,
  setDisable
) {
  if (j === swaps.length) {
    let newArray = array.slice();
    let { element } = animations[i];
    newArray[element].backgroundColor = "white";
    setArray(newArray);
    animateInsertionSort(i + 1, animations, newArray, setArray, setDisable);
    return;
  }

  let newArray = array.slice();
  let [element1, element2] = swaps[j];

  newArray[element1].backgroundColor =
    element !== element1 ? "red" : "lightgreen";
  newArray[element2].backgroundColor = "red";

  setArray(newArray);

  setTimeout(() => {
    [newArray[element1].value, newArray[element2].value] = [
      newArray[element2].value,
      newArray[element1].value,
    ];
    newArray[element1].backgroundColor =
      element !== element1 ? "white" : "lightgreen";
    newArray[element2].backgroundColor = "white";

    newArray[element1].playNote();
    newArray[element2].playNote();

    setArray(newArray);
    animateSwaps(
      j + 1,
      swaps,
      element,
      newArray,
      setArray,
      i,
      animations,
      setDisable
    );
  }, 25);
}

export function animateInsertionSort(
  i,
  animations,
  array,
  setArray,
  setDisable
) {
  if (i === animations.length) {
    finalAnimation(0, 0, array, setArray, setDisable);
    return;
  }
  let newArray = array.slice();
  let { element, swaps } = animations[i];
  newArray[element].backgroundColor = "lightgreen";
  setArray(newArray);
  setTimeout(() => {
    animateSwaps(
      0,
      swaps,
      element,
      newArray,
      setArray,
      i,
      animations,
      setDisable
    );
  }, 25);
}
