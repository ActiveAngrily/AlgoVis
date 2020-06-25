import React from "react";
import ReactDOM from "react-dom";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      array: [],
      BAR_COLOR_PRI: "rgb(66, 66, 66)",
    };
  }
  render() {
    return (
      <div className="array-container" style={{ height: "50", width: "100%" }}>
        {this.props.array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: this.props.BAR_COLOR_PRI,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    );
  }
}
export default Grid;
