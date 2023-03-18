function twoWayMergeSort(arr, start, mid, end) {}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + end / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
  }
}
