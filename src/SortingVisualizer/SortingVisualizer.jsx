import React, { Component } from 'react'
import './SortingVisualizer.css'


export class SortingVisualizer extends Component {

  state = {
    array: []
  };

  componentDidMount() {
    this.resetArray();
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={this.resetArray}>Generate New Array</button>
        <button onClick={this.mergeSort}>Merge Sort</button>
        <button onClick={this.bubbleSort}>Bubble Sort</button>
        <button onClick={this.quickSort}>Quick Sort</button>
        <button onClick={this.heapSort}>Heap Sort</button>
      </div>
    )
  }

  mergeSort = () => {

  }

  bubbleSort = () => {

  }

  quickSort = () => {

  }

  heapSort = () => {

  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(this.randomIntFromInterval(5, 600));
    }
    this.setState({ array });
  };

  randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

};