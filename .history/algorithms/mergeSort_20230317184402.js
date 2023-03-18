function twoWayMergeSort(arr, start, mid, end) {
  let A = [];
  let B = [];
}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + end / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    twoWayMergeSort(arr, start, mid, end);
  }
}
