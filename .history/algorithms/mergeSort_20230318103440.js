function twoWayMergeSort(arr, start, mid, end, animations) {
  var start2 = mid + 1;
  while (start <= mid && start2 <= end) {
    let animation = {};
    animation.comparison = [start, start2];
    if (arr[start].value <= arr[start2].value) {
      animation.swap = [];
      start++;
    } else {
      animation.rotate = [];
      let val = arr[start2].value;
      for (let i = start2; i !== start; i--) {
        arr[i].value = arr[i - 1].value;
      }
      arr[start].value = val;
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
  console.log(arr);
  return animations;
}
