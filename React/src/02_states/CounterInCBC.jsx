import React, { Component } from "react";

export default class CounterInCBC extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  render() {
    return (
      <>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          count
        </button>
      </>
    );
  }
}
