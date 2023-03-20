function partition(array, start, end, animations) {
  let pivot = array[start].value;
  let animation = {};

  animation.pivot = start;
  animation.swaps = [];

  let i = start;
  let j = end;

  while (i < j) {
    let left = [];
    let right = [];

    while (i <= end && array[i].value <= pivot) {
      left.push(i);
      i++;
    }

    while (j >= start && array[j].value > pivot) {
      right.push(j);
      j--;
    }

    let swap = {
      left,
      right,
      lesser: null,
      greater: null,
    };

    if (i < j) {
      [array[i], array[j]] = [array[j], array[i]];
      swap.lesser = j;
      swap.greater = i;
    } else {
      if (i <= end && array[i].value > pivot && left.length < right.length) {
        swap.greater = i;
      }
      if (j >= start && array[j].value <= pivot && right.length < left.length) {
        swap.lesser = j;
      }
    }
    animation.swaps.push(swap);
  }
  [array[j], array[start]] = [array[start], array[j]];
  animation.sortedPosition = j;

  animations.push(animation);

  return j;
}

export function quickSort(array) {
  let animations = [];

  function helper(array, start, end) {
    if (start < end) {
      let pivot = partition(array, start, end, animations);

      helper(array, start, pivot - 1);
      helper(array, pivot + 1, end);
    }
  }
  helper(array, 0, array.length - 1);
  return animations;
}
