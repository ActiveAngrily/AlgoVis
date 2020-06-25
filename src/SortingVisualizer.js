import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.js";
import { BubbleSortHelper } from "./bubblesort.js";

import Grid from "./Grid.js";

var BARS_HEIGHT_RANGE = 500;
const NUM_OF_BARS = 200;
const ANIM_SPEED_MS = 10000;
const BAR_COLOR_PRI = "rgb(66, 66, 66)";
const BAR_COLOR_SEC = "blue";
const BAR_COLOR_SORTED = "green";
var animarray = [];

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      VisualizeButtonState: true,
      array: [],
      sortingOption: "Bubble Sort",
    };
  }

  BubbleSort() {
    this.setState({ VisualizeButtonState: false });
    const animations = BubbleSortHelper(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const colorChange = i % 2 == 0;
      if (colorChange) {
          setTimeout(() => {
            
        const [bar1idx, bar2idx] = animations[i];
        const bar1style = arrayBars[bar1idx];
        const bar2style = arrayBars[bar2idx];
        bar1style.backgroundColor = "green";
        bar2style.backgroundColor = "blue";
          },i*ANIM_SPEED_MS);
    } else {
        setTimeout(() => {
          const [bar1idx, bar2idx] = animations[i];
          const bar1styleHeight = arrayBars[bar1idx].style.height;
          const bar1style = arrayBars[bar1idx].style;
          const bar2styleHeight = arrayBars[bar2idx].style.height;
          const bar2style = arrayBars[bar2idx].style;

          bar1style.height = `${bar2styleHeight}px`;
          bar2style.height = `${bar1styleHeight}px`;
        }, i * ANIM_SPEED_MS);
      }
    }
  }

  MakeBars() {
    const array = [];
    for (let i = 1; i <= NUM_OF_BARS; i++) {
      array.push(RandomIntFromInterval(5, BARS_HEIGHT_RANGE));
    }
    this.setState({ array, VisualizeButtonState: true });
  }

  componentDidMount() {
    this.MakeBars();
  }

  render() {
    var array = this.state.array;

    return (
      <div className="SortingVisaulizer">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <button
            type="button"
            class="btn btn-lg btn-outline-success"
            disabled={!this.state.VisualizeButtonState}
            onClick={() => this.BubbleSort()}
          >
            Visualize
          </button>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.sortingOption}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href="#"
                onClick={() =>
                  this.setState({
                    sortingOption: "Bubble Sort",
                    VisualizeButtonState: true,
                  })
                }
              >
                Bubble Sort
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() =>
                  this.setState({
                    sortingOption: "Merge Sort",
                    VisualizeButtonState: false,
                  })
                }
              >
                Merge Sort
              </a>
              <a
                class="dropdown-item"
                href="#"
                onClick={() =>
                  this.setState({
                    sortingOption: "Quick Sort",
                    VisualizeButtonState: false,
                  })
                }
              >
                Quick Sort
              </a>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-lg btn-secondary btn-sm"
            onClick={() => this.MakeBars()}
          >
            Reset Array
          </button>
        </nav>
        <Grid array={this.state.array} BAR_COLOR_PRI={BAR_COLOR_PRI} />
      </div>
    );
  }
}
function RandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default SortingVisualizer;
