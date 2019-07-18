import React, { Component } from "react";

export default class TemperatureInput extends Component {
  handleChange = event => {
    this.props.handleTemperatureChange(event.target.value, this.props.scale);
  };

  render() {
    return (
      <div>
        <label>Input temperature in {this.props.scale}: </label>
        <input onChange={this.handleChange} value={this.props.temperature} />
      </div>
    );
  }
}
