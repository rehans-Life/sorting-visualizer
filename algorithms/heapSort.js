function bfs(arr, n) {
  let queue = [];

  queue.push(0);
  arr[0].level = 0;

  while (queue.length) {
    let [node] = queue.splice(0, 1);

    let leftChild = 2 * node + 1;
    let rightChild = 2 * node + 2;

    if (leftChild < n) {
      queue.push(leftChild);
      arr[leftChild].level = arr[node].level + 1;
    }

    if (rightChild < n) {
      queue.push(rightChild);
      arr[rightChild].level = arr[node].level + 1;
    }
  }
}

function shiftdown(arr, i, n, shifts) {
  shifts.push(i);
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  while (
    (leftChild < n && arr[leftChild].value > arr[i].value) ||
    (rightChild < n && arr[rightChild].value > arr[i].value)
  ) {
    let larger =
      rightChild >= n || arr[leftChild].value > arr[rightChild].value
        ? leftChild
        : rightChild;
    shifts.push(larger);
    [arr[i], arr[larger]] = [arr[larger], arr[i]];
    i = larger;
    leftChild = 2 * i + 1;
    rightChild = 2 * i + 2;
  }
}

function heapify(arr, n, animations) {
  animations.shiftdowns = [];

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    let shifts = [];
    shiftdown(arr, i, n, shifts);
    animations.shiftdowns.push(shifts);
  }
}

export function heapSort(array, setArray) {
  let animations = {};
  let n = array.length;
  bfs(array, n);

  setArray(array);

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(JSON.parse(JSON.stringify(array[i])));
  }

  heapify(newArray, n, animations);

  animations.swaps = [];

  for (let i = n - 1; i >= 0; i--) {
    let swap = {};
    swap.shifts = [];
    swap.from = 0;
    swap.to = i;
    [newArray[0], newArray[i]] = [newArray[i], newArray[0]];
    shiftdown(newArray, 0, i, swap.shifts);
    animations.swaps.push(swap);
  }
  return animations;
}
