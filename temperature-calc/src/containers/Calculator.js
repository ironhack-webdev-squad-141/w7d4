import React, { Component } from "react";
import BoilingCheck from "../components/BoilingCheck";
import TemperatureInput from "../components/TemperatureInput";

const toFahrenheit = celsius => (celsius * 9) / 5 + 32;
const toCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

export default class Calculator extends Component {
  state = {
    temperature: 0,
    scale: "celsius"
  };

  handleTemperatureChange = (temperature, scale) => {
    this.setState({ temperature: temperature, scale: scale });
  };

  render() {
    const celsius =
      this.state.scale === "celsius"
        ? this.state.temperature
        : toCelsius(this.state.temperature);

    const fahrenheit =
      this.state.scale === "fahrenheit"
        ? this.state.temperature
        : toFahrenheit(this.state.temperature);

    return (
      <div>
        <TemperatureInput
          handleTemperatureChange={this.handleTemperatureChange}
          temperature={celsius}
          scale="celsius"
        />
        <TemperatureInput
          handleTemperatureChange={this.handleTemperatureChange}
          temperature={fahrenheit}
          scale="fahrenheit"
        />
        <BoilingCheck temperature={celsius} />
      </div>
    );
  }
}
