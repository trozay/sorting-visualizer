const getBubbleSortAnimations = arr => {
  let animations = []
  bubbleSort(arr, animations);
  return animations;
};

const bubbleSort = (arr, animations) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      animations.push([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1, true]);
        const toSwap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = toSwap;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

module.exports = { getBubbleSortAnimations };