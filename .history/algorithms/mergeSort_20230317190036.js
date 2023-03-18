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

  var i = 0;
  var j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }

  for (let i = 0; i < A.length; i++) {
    C.push(B[i]);
  }

  for (let j = 0; j < B.length; j++) {
    C.push(B[j]);
  }
  k = 0;
  for (let i = start; i < end + 1; i++) {
    arr[i] = C[k];
    k++;
  }
}

export function mergeSort(arr) {
  function helper(arr, start, end) {
    if (start < end) {
      let mid = Math.floor(start + end / 2);

      helper(arr, start, mid);
      helper(arr, mid + 1, end);

      twoWayMergeSort(arr, start, mid, end);
    }
  }
  helper(arr, 0, arr.length - 1);
  return arr;
}
