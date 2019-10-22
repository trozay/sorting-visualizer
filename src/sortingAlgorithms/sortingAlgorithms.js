const mergeSort = arr => {
  if (!arr || !arr.length) return arr;
  if (arr.length === 1) return arr;
  const middleIdx = Math.floor(array.length / 2);
  const firstHalf = mergeSort(arr.slice(0, middleIdx));
  const secondHalf = mergeSort(arr.slice(middleIdx));
  const sortedArr = [];
  let i = 0, j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArr.push(secondHalf[j++]);
    };
  };

  while (i < firstHalf.length) sortedArr.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArr.push(secondHalf[j++]);
  return sortedArr;
};

export const quickSort = arr => {

};

export const heapSort = arr => {

};

export const bubbleSort = arr => {

};

module.exports = { mergeSort };