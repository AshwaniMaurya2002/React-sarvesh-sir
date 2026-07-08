import React, { Component } from "react";
// always store data in object form in CBC

export default class StatesInCBC extends Component {
  constructor() {
    super();
    this.state = { data: "Helloo World" };
  }

  render() {
    // return the object of the current class
    console.log(this);

    return (
      <>
        <h1>Learn States in Class Based</h1>
        <h2>{this.state.data}</h2>
        <button onClick={() => this.setState({ data: "Byee World" })}>
          Change
        </button>
      </>
    );
  }
}
