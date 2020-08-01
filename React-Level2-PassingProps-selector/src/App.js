import React, { Component } from "react";
import "./App.css";
import Shape from "./shape.js";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      shape: "   Please select your shape."
    };
  }

  selectFunc = shapeName => {
    this.setState({
      shape: shapeName
    });
  };

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>
            Selected:<span>{this.state.shape}</span>
          </div>
        </div>
        <div className="shapes_container">
          <Shape shape="square" selectFunc={this.selectFunc} />
          <Shape shape="circle" selectFunc={this.selectFunc} />
          <Shape shape="triangle" selectFunc={this.selectFunc} />
          <Shape shape="star" selectFunc={this.selectFunc} />
          <Shape shape="trapezium" selectFunc={this.selectFunc} />
        </div>
      </div>
    );
  }
}

export default Selector;
