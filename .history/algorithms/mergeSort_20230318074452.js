function twoWayMergeSort(arr, start, mid, end) {
  var start2 = mid + 1;

  while (start <= mid && start2 <= end) {
    if (arr[start] < arr[start2]) {
      start++;
    }
  }
}

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
