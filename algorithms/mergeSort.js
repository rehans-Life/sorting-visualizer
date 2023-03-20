function comparisons(arr, start, mid, end) {
  let start2 = mid + 1;
  let comps = [];

  while (start <= mid && start2 <= end) {
    if (arr[start].value < arr[start2].value) {
      comps.push(start);
      comps.push(start2);
      start++;
    } else {
      comps.push(start);
      comps.push(start2);
      start2++;
    }
  }

  while (start <= mid) {
    comps.push(start);
    start++;
  }

  while (start2 <= end) {
    comps.push(start2);
    start2++;
  }

  return comps;
}

function twoWayMergeSort(arr, start, mid, end, animations) {
  let A = [];
  let B = [];

  for (let i = start; i < mid + 1; i++) {
    A.push(arr[i]);
  }

  for (let i = mid + 1; i < end + 1; i++) {
    B.push(arr[i]);
  }

  let C = [];

  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    if (A[i].value < B[j].value) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }

  while (i < A.length) {
    C.push(A[i]);
    i++;
  }

  while (j < B.length) {
    C.push(B[j]);
    j++;
  }

  let comps = comparisons(arr, start, mid, end);

  let k = 0;
  for (let i = start; i < end + 1; i++) {
    arr[i] = C[k];
    k++;
  }

  let animation = {
    start,
    mid,
    end,
    sortedArray: C,
    comparisons: comps,
  };

  animations.push(animation);
}

export function mergeSort(arr) {
  let animations = [];

  function helper(arr, start, end, animations) {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);

      helper(arr, start, mid, animations);
      helper(arr, mid + 1, end, animations);

      twoWayMergeSort(arr, start, mid, end, animations);
    }
  }
  helper(arr, 0, arr.length - 1, animations);
  return animations;
}
