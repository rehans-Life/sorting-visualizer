function twoWayMergeSort(arr, start, mid, end) {
  let A = [];
  let B = [];

  for (let i = start; i < mid + 1; i++) {
    A.push(arr[i]);
  }
}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + end / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    twoWayMergeSort(arr, start, mid, end);
  }
}
