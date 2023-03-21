import { finalAnimation } from "./finalAnimation";

function animateSwaps(
  j,
  swaps,
  pivot,
  sortedPosition,
  array,
  setArray,
  animations,
  i,
  delay,
  setDisable
) {
  if (j === swaps.length) {
    setTimeout(() => {
      let newArray = array.slice();
      let pivotElement = newArray[pivot];
      let sortedPositionElement = newArray[sortedPosition];
      let newPivotElement = {
        ...pivotElement,
      };
      newArray[sortedPosition] = newPivotElement;
      let newsortedPositionElment = {
        ...sortedPositionElement,
      };
      newArray[pivot] = newsortedPositionElment;

      setTimeout(() => {
        let newArr = newArray.slice();
        newArr[sortedPosition].backgroundColor = "white";
        setArray(newArr);
        animateQuickSort(i + 1, animations, newArr, setArray, setDisable);
      }, 50);

      setArray(newArray);
    }, delay);
    return;
  }
  let { left, right, lesser, greater } = swaps[j];
  let n = left.length;
  let m = right.length;
  let larger = n > m ? n : m;
  animateTraversel(
    0,
    array,
    setArray,
    50,
    left,
    right,
    n,
    m,
    pivot,
    greater,
    lesser,
    larger,
    j,
    swaps,
    sortedPosition,
    animations,
    i,
    setDisable
  );
}

function animateTraversel(
  z,
  array,
  setArray,
  delay,
  left,
  right,
  n,
  m,
  pivot,
  greater,
  lesser,
  larger,
  j,
  swaps,
  sortedPosition,
  animations,
  i,
  setDisable
) {
  if (z === larger) {
    setTimeout(() => {
      let newArray = array.slice();

      if (greater && lesser) {
        let greaterElement = newArray[greater];
        let lesserElement = newArray[lesser];
        let newGreaterElment = {
          ...greaterElement,
          backgroundColor: "white",
        };
        let newLesserElment = {
          ...lesserElement,
          backgroundColor: "white",
        };
        newArray[lesser] = newGreaterElment;
        newArray[greater] = newLesserElment;
        setArray(newArray);
      }
      animateSwaps(
        j + 1,
        swaps,
        pivot,
        sortedPosition,
        newArray,
        setArray,
        animations,
        i,
        50,
        setDisable
      );
    }, delay);
    return;
  }

  setTimeout(() => {
    let newArray = array.slice();
    if (z < n) {
      newArray[left[z]].backgroundColor =
        left[z] !== pivot ? "red" : "lightgreen";
      newArray[left[z]].playNote();
      setTimeout(() => {
        newArray[left[z]].backgroundColor =
          left[z] !== pivot ? "white" : "lightgreen";
      }, 50);
    } else if (z === n) {
      if (greater) {
        newArray[greater].playNote();
        newArray[greater].backgroundColor = "aqua";
      }
    }
    if (z < m) {
      newArray[right[z]].backgroundColor = "red";
      newArray[right[z]].playNote();
      setTimeout(() => {
        newArray[right[z]].backgroundColor = "white";
      }, 50);
    } else if (z === m) {
      if (lesser) {
        newArray[lesser].playNote();
        newArray[lesser].backgroundColor = "aqua";
      }
    }
    setArray(newArray);
    animateTraversel(
      z + 1,
      newArray,
      setArray,
      50,
      left,
      right,
      n,
      m,
      pivot,
      greater,
      lesser,
      larger,
      j,
      swaps,
      sortedPosition,
      animations,
      i,
      setDisable
    );
  }, 50);
}

export function animateQuickSort(i, animations, array, setArray, setDisable) {
  if (i === animations.length) {
    finalAnimation(0, 0, array, setArray, setDisable);
    return;
  }

  let { pivot, sortedPosition, swaps } = animations[i];
  let newArray = array.slice();

  newArray[pivot].backgroundColor = "lightgreen";
  setArray(newArray);

  animateSwaps(
    0,
    swaps,
    pivot,
    sortedPosition,
    newArray,
    setArray,
    animations,
    i,
    50,
    setDisable
  );
}
