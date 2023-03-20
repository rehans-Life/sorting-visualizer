import { finalAnimation } from "./finalAnimation";

function visualizeSortedArray(
  j,
  k,
  prevDelay,
  sortedArray,
  array,
  setArray,
  start,
  mid,
  end,
  i,
  animations,
  setDisable
) {
  if (j === end + 1) {
    let newArray = array.slice();
    array[start].backgroundColor = "white";
    array[end].backgroundColor = "white";
    array[mid + 1].backgroundColor = "white";
    setArray(newArray);

    setTimeout(() => {
      animateMergeSort(i + 1, animations, array, setArray, setDisable);
    }, prevDelay);
    return;
  }

  setTimeout(() => {
    let newArray = array.slice();
    newArray[j].value = sortedArray[k].value;
    newArray[j].backgroundColor = "red";

    setTimeout(() => {
      newArray[j].backgroundColor = "white";
    }, 30);
    setArray(newArray);
    visualizeSortedArray(
      j + 1,
      k + 1,
      30,
      sortedArray,
      array,
      setArray,
      start,
      mid,
      end,
      i,
      animations,
      setDisable
    );
  }, prevDelay);
}

export function animateMergeSort(i, animations, array, setArray, setDisable) {
  if (i == animations.length) {
    finalAnimation(0, 0, array, setArray, setDisable);
    return;
  }

  let { start, mid, end, sortedArray, comparisons } = animations[i];
  let newArray = array.slice();
  newArray[start].backgroundColor = "lightgreen";
  newArray[mid + 1].backgroundColor = "lightblue";
  newArray[end].backgroundColor = "lightgreen";

  function animateComparisons(
    j,
    comparisons,
    array,
    setArray,
    prevDelay,
    start,
    mid,
    end,
    setDisable
  ) {
    if (j === comparisons.length) {
      setTimeout(() => {
        visualizeSortedArray(
          start,
          0,
          0,
          sortedArray,
          array,
          setArray,
          start,
          mid,
          end,
          i,
          animations,
          setDisable
        );
      }, prevDelay);
      return;
    }
    setTimeout(() => {
      let newArray = array.slice();
      if (
        comparisons[j] !== start &&
        comparisons[j] !== mid + 1 &&
        comparisons[j] !== end
      ) {
        newArray[comparisons[j]].backgroundColor = "red";
        setTimeout(() => {
          newArray[comparisons[j]].backgroundColor = "white";
        }, 50);
      }
      newArray[comparisons[j]].playNote();
      setArray(newArray);
      animateComparisons(
        j + 1,
        comparisons,
        array,
        setArray,
        50,
        start,
        mid,
        end,
        setDisable
      );
    }, prevDelay);
  }
  animateComparisons(
    0,
    comparisons,
    array,
    setArray,
    50,
    start,
    mid,
    end,
    setDisable
  );
}
