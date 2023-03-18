function twoWayMergeSort(arr, start, mid, end) {}

export function mergeSort(arr) {
  function helper(arr, start, end) {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);

      helper(arr, start, mid);
      helper(arr, mid + 1, end);

      twoWayMergeSort(arr, start, mid, end);
    }
  }
  helper(arr, 0, arr.length - 1);
  return arr;
}
