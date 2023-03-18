function twoWayMergeSort(arr, start, mid, end) {
  let A = [];
  let B = [];

  for (let i = start; i < mid + 1; i++) {
    A.push(arr[i]);
  }

  for (let i = mid + 1; i < end + 1; i++) {
    B.push(arr[i]);
  }

  let C = [];

  i = 0;
  j = 0;

  while(i < A.length && j < B.length)

}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + end / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    twoWayMergeSort(arr, start, mid, end);
  }
}
