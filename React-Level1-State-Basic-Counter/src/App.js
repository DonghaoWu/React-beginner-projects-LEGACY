import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      countByTwo: false
    };
  }

  increment = () => {
    if (this.state.counter < 20 && !this.state.countByTwo) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    if (this.state.counter < 19 && this.state.countByTwo) {
      this.setState({
        counter: this.state.counter + 2
      });
    }
  };

  decrement = () => {
    if (this.state.counter > 0 && !this.state.countByTwo) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
    if (this.state.counter > 1 && this.state.countByTwo) {
      this.setState({
        counter: this.state.counter - 2
      });
    }
  };

  clear = () => {
    this.setState({
      counter: 0
    });
  };

  toggleIncement = () => {
    //setState is async function.
    this.setState({ countByTwo: !this.state.countByTwo });
  };

  render() {
    //console.log("this is counter number", this.state.counter);
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <button type="button" onClick={this.increment}>
            Increment
          </button>
          <button type="button" onClick={this.decrement}>
            Decrement
          </button>
          <button type="button" onClick={this.clear}>
            Clear
          </button>
          <button type="button" onClick={this.toggleIncement}>
            {this.state.countByTwo ? "Double Count" : "Single Count"}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
