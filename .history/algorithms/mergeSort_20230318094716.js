function twoWayMergeSort(arr, start, mid, end, animations) {
  var start2 = mid + 1;
  while (start <= mid && start2 <= end) {
    let animation = {};
    animation.comparison = [start, start2];
    if (arr[start] <= arr[start2]) {
      animation.swap = [start, start2];
      start++;
    } else {
      animation.swap = [start2, start];
      let val = arr[start2];
      for (let i = start2; i !== start; i--) {
        arr[i] = arr[i - 1];
      }
      arr[start] = val;
      start++;
      mid++;
      start2++;
    }
    animations.push(animation);
  }
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
