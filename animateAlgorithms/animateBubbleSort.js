import { finalAnimation } from "./finalAnimation";

function animateSwaps(i, animations, array, setArray, setDisable) {
  if (i === animations.length) {
    finalAnimation(0, 0, array, setArray, setDisable);
    return;
  }
  let newArray = array.slice();
  let [element1, element2, isSwapped] = animations[i];
  if (isSwapped) {
    newArray[element1].backgroundColor = "lightgreen";
    newArray[element2].backgroundColor = "lightgreen";
    [newArray[element1], newArray[element2]] = [
      newArray[element2],
      newArray[element1],
    ];
  } else {
    newArray[element1].backgroundColor = "red";
    newArray[element2].backgroundColor = "red";
  }
  newArray[element1].playNote();
  newArray[element2].playNote();

  setTimeout(() => {
    newArray[element1].backgroundColor = "white";
    newArray[element2].backgroundColor = "white";
    animateSwaps(i + 1, animations, newArray, setArray, setDisable);
  }, 25);

  setArray(newArray);
}

export function animateBubbleSort(animations, array, setArray, setDisable) {
  let newArray = array.slice();
  animateSwaps(0, animations, newArray, setArray, setDisable);
}
