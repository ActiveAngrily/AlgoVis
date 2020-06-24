import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import $ from "jquery";
import Popper from "popper.js";
import bubbleSortAnimation from "./bubblesort.js";
import "bootstrap/dist/js/bootstrap.js";

var BARS_HEIGHT_RANGE = 500;
const NUM_OF_BARS = 200;
const ANIM_SPEED_MS = 1;
const BAR_COLOR_PRI = "rgb(66, 66, 66)";
const BAR_COLOR_SEC = "blue";
const BAR_COLOR_SORTED = "green";
var animarray = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      VisualizeButtonState: true,
      array: [],
      sortingOption: "Bubble Sort",
    };
  }
  animate_array() {
    /*
    animarray =  bubbleSortAnimation(this.state.array);
    for (let i = 0; i < animarray.length; i++) {
      this.setState({ array: animarray[i] }); 
    }*/
    this.setState({ array: (this.state.array) });
  }
  MakeBars() {
    
    const array = [];
    for (let i = 0; i < NUM_OF_BARS; i++) {
      array.push(RandomIntFromInterval(5, BARS_HEIGHT_RANGE));
    }
    this.setState({ array });
  }

  componentDidMount() {
    this.MakeBars();
  }

  render() {
    var array = this.state.array;

    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <button
            type="button"
            class="btn btn-lg btn-outline-success"
            disabled={!this.state.VisualizeButtonState}
            onClick={() => this.animate_array()}
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
        <div
          className="array-container"
          style={{ height: "50", width: "100%" }}
        >
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: BAR_COLOR_PRI,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
function RandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

ReactDOM.render(<App />, document.getElementById("root"));
