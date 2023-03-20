export function bubbleSort(array) {
  let animations = [];
  let n = array.length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (array[j].value > array[j + 1].value) {
        animations.push([j, j + 1, true]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        animations.push([j, j + 1, false]);
      }
    }
  }
  return animations;
}
