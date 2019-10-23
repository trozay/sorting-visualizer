import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      isRunning: false
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 150));
    }
    this.setState({ array, sorted: false });
  }

  mergeSort() {
    this.setState({ sorted: true });
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) this.setState({ isRunning: false })
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    this.setState({ isRunning: true });
    const animations = getBubbleSortAnimations(this.state.array.slice());
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][2]) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          let temp = {
            height: barOneStyle.height,
            num: barOneStyle
          }
          barOneStyle.height = `${barTwoStyle.height}`;
          barTwoStyle.height = `${temp.height}`;
        }, (i * ANIMATION_SPEED_MS))
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, (i * ANIMATION_SPEED_MS));
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
          if (i === animations.length - 1) this.setState({ isRunning: false })
        }, (i * ANIMATION_SPEED_MS) + 15);
      }
    }
  }

  quickSort() {

  }

  heapSort() {

  }

  render() {
    const { array, isRunning } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => {

          return <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        })}
        <button onClick={() => this.resetArray()} disabled={isRunning}>Generate New Array</button>
        <button onClick={() => this.mergeSort()} disabled={isRunning}>Merge Sort</button>
        <button onClick={() => this.quickSort()} disabled={isRunning}>Quick Sort</button>
        <button onClick={() => this.heapSort()} disabled={isRunning}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()} disabled={isRunning}>Bubble Sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
