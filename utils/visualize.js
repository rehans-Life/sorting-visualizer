import { bubbleSort } from "../algorithms/bubbleSort";
import { heapSort } from "../algorithms/heapSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";
import { animateBubbleSort } from "../animateAlgorithms/animateBubbleSort";
import { animateHeapSort } from "../animateAlgorithms/animateHeapSort";
import { animateInsertionSort } from "../animateAlgorithms/animateInsertionSort";
import { animateMergeSort } from "../animateAlgorithms/animateMergeSort";
import { animateQuickSort } from "../animateAlgorithms/animateQuickSort";
import { copy } from "./copy";

export function visualize(selectedAlgo, array, setArray, setDisable) {
  if (selectedAlgo === "Merge Sort") {
    animateMergeSort(0, mergeSort(copy(array)), array, setArray, setDisable);
  } else if (selectedAlgo === "Quick Sort") {
    animateQuickSort(0, quickSort(copy(array)), array, setArray, setDisable);
  } else if (selectedAlgo === "Bubble Sort") {
    animateBubbleSort(bubbleSort(copy(array)), array, setArray, setDisable);
  } else if (selectedAlgo === "Insertion Sort") {
    animateInsertionSort(
      0,
      insertionSort(copy(array)),
      array,
      setArray,
      setDisable
    );
  } else if (selectedAlgo === "Heap Sort") {
    animateHeapSort(heapSort(array, setArray), array, setArray, setDisable);
  } else {
    setDisable(false);
  }
}
