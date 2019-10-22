const { expect } = require("chai");
// const { mergeSort, quickSort, heapSort, bubbleSort } = './sortingAlgorithms.js';
const { mergeSort } = '../sortingAlgorithms/sortingAlgorithms.js';

console.log(mergeSort)
describe("Merge Sort", () => {
  it("Returns an empty array when passed an empty array", () => {
    expect(mergeSort([])).to.eql([]);
  });
  it("Returns a duplicate array when it is already sorted", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
  });
  it("Returns a sorted array when passed a mixed up array", () => {
    expect(mergeSort([1, 2, 5, 4, 3])).to.eql([1, 2, 3, 4, 5,]);
    expect(mergeSort([12, 43, 22, 1])).to.eql([1, 12, 22, 43]);
    expect(mergeSort([1, 2, 33, 45, 6, 10, 4, 100, 54])).to.eql([1, 2, 4, 6, 10, 33, 45, 54, 100]);
  });
});

// describe("Quick Sort", () => {
//   it("Returns an empty array when passed an empty array", () => {
//     expect(quickSort([])).to.eql([]);
//   });
//   it("Returns a duplicate array when it is already sorted", () => {
//     expect(quickSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
//   });
//   it("Returns a sorted array when passed a mixed up array", () => {
//     expect(quickSort([1, 2, 5, 4, 3])).to.eql([1, 2, 3, 4, 5,]);
//     expect(quickSort([12, 43, 22, 1])).to.eql([1, 12, 22, 43]);
//     expect(quickSort([1, 2, 33, 45, 6, 10, 4, 100, 54])).to.eql([1, 2, 4, 6, 10, 33, 45, 54, 100]);
//   });
// });

// describe("Heap Sort", () => {
//   it("Returns an empty array when passed an empty array", () => {
//     expect(heapSort([])).to.eql([]);
//   });
//   it("Returns a duplicate array when it is already sorted", () => {
//     expect(heapSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
//   });
//   it("Returns a sorted array when passed a mixed up array", () => {
//     expect(heapSort([1, 2, 5, 4, 3])).to.eql([1, 2, 3, 4, 5,]);
//     expect(heapSort([12, 43, 22, 1])).to.eql([1, 12, 22, 43]);
//     expect(heapSort([1, 2, 33, 45, 6, 10, 4, 100, 54])).to.eql([1, 2, 4, 6, 10, 33, 45, 54, 100]);
//   });
// });

// describe("Bubble Sort", () => {
//   it("Returns an empty array when passed an empty array", () => {
//     expect(bubbleSort([])).to.eql([]);
//   });
//   it("Returns a duplicate array when it is already sorted", () => {
//     expect(bubbleSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
//   });
//   it("Returns a sorted array when passed a mixed up array", () => {
//     expect(bubbleSort([1, 2, 5, 4, 3])).to.eql([1, 2, 3, 4, 5,]);
//     expect(bubbleSort([12, 43, 22, 1])).to.eql([1, 12, 22, 43]);
//     expect(bubbleSort([1, 2, 33, 45, 6, 10, 4, 100, 54])).to.eql([1, 2, 4, 6, 10, 33, 45, 54, 100]);
//   });
// });