// Code ClickityClick Component Here

import React from "react";
class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
      count: 0,
    };
  }
  handleClick = () => {
    let newCount = this.state.count + 1;
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
        count: previousState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>I am {this.state.toggled ? "ON" : "OFF"}!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
