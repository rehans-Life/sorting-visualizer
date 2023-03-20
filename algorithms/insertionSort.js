export function insertionSort(array) {
  let animations = [];
  for (let i = 1; i < array.length; i++) {
    let animation = {};
    let j = i;
    animation.element = i;
    animation.swaps = [];
    while (j > 0 && array[j - 1].value > array[j].value) {
      animation.swaps.push([j, j - 1]);
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
    animations.push(animation);
  }
  return animations;
}
