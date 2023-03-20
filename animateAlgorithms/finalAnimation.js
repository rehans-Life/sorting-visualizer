export function finalAnimation(i, prevDelay, array, setArray, setDisable) {
  if (i === array.length) {
    setTimeout(() => {
      let newArray = array.slice();
      for (let j = 0; j < array.length; j++) {
        newArray[j].backgroundColor = "white";
      }
      setArray(newArray);
      setDisable(false);
    }, prevDelay + 10);
    return;
  }

  let newArray = array.slice();

  newArray[i].backgroundColor = "red";
  newArray[i].playNote();
  setArray(newArray);

  setTimeout(() => {
    newArray[i].backgroundColor = "lightgreen";

    finalAnimation(i + 1, (i + 5) * 5, array, setArray, setDisable);
  }, 50);
}
