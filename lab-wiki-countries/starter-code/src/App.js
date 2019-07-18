import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
import countries from "./countries.json";

class App extends Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  <CountriesList countries={this.state.countries} />
                </div>
              </div>
              <Switch>
                <Route
                  exact
                  path="/:cca3"
                  render={props => (
                    <CountryDetails
                      {...props}
                      countries={this.state.countries}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
