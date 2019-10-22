const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
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

module.exports = { bubbleSort };