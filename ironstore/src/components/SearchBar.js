import React from "react";

class SearchBar extends React.Component {
  handleSearch = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.props.onSearchChange(name, value);
  };

  handleCheck = e => {
    const value = !this.props.checked;
    const name = e.target.name;

    this.props.onSearchChange(name, value);
  };

  render() {
    return (
      <div>
        <h4>Search</h4>
        <input
          name="searchInput"
          type="text"
          value={this.props.searchInput}
          onChange={this.handleSearch}
        />
        <input
          type="checkbox"
          name="checked"
          value={this.props.checked}
          onChange={this.handleCheck}
        />
      </div>
    );
  }
}

export default SearchBar;
